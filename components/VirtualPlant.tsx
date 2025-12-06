'use client'

import { useState, useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'
import Lottie from 'lottie-react'
import monsteraLeafAnimation from './Monstera leaf.json'

// 植物生长阶段
enum PlantStage {
  SEED = 0,
  SPROUT = 1,
  YOUNG = 2,
  MATURE = 3,
  FLOWERING = 4
}

// 植物状态接口
interface PlantState {
  stage: PlantStage
  isMinimized: boolean
  readingProgress: number // 阅读进度，0-100
  dailyReadingTime: number // 今日阅读时间（秒）
  lastReadingDate: string // 上次阅读日期
  prevReadingProgress: number // 上一次的阅读进度，用于检测里程碑
}

// 初始植物状态
const initialPlantState: PlantState = {
  stage: PlantStage.SEED,
  isMinimized: false,
  readingProgress: 0,
  dailyReadingTime: 0,
  lastReadingDate: new Date().toISOString().split('T')[0], // 格式: YYYY-MM-DD
  prevReadingProgress: 0
}

// 本地存储键名
const PLANT_STORAGE_KEY = 'monstera-plant'

export default function VirtualPlant() {
  const { resolvedTheme } = useTheme()
  const [plantState, setPlantState] = useState<PlantState>(initialPlantState)
  const [isClient, setIsClient] = useState(false)
  const lottieRef = useRef<any>(null)

  // 从本地存储加载植物状态
  useEffect(() => {
    setIsClient(true)
    const savedState = localStorage.getItem('monstera-plant')
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState)
        // 确保prevReadingProgress字段存在，如果不存在则初始化为0
        if (parsedState.prevReadingProgress === undefined) {
          parsedState.prevReadingProgress = 0
        }
        setPlantState(parsedState)
      } catch (error) {
        console.error('Failed to load plant state:', error)
      }
    }
  }, [isClient])

  // 保存植物状态到本地存储
  useEffect(() => {
    if (isClient) {
      localStorage.setItem(PLANT_STORAGE_KEY, JSON.stringify(plantState))
    }
  }, [plantState, isClient])

  // 追踪阅读时间
  useEffect(() => {
    if (!isClient) return
    
    let readingTimer: NodeJS.Timeout | null = null
    let startTime: number | null = null
    
    // 开始阅读计时
    const startReading = () => {
      if (!readingTimer) {
        startTime = Date.now()
        readingTimer = setInterval(() => {
          setPlantState(prevState => {
            const newReadingTime = prevState.dailyReadingTime + 1
            const newProgress = Math.min(100, Math.floor((newReadingTime / 120) * 100)) // 2分钟完成100%
            
            return {
              ...prevState,
              dailyReadingTime: newReadingTime,
              readingProgress: newProgress
            }
          })
        }, 1000) // 每秒更新一次
      }
    }
    
    // 停止阅读计时
    const stopReading = () => {
      if (readingTimer) {
        clearInterval(readingTimer)
        readingTimer = null
        startTime = null
      }
    }
    
    // 监听页面可见性变化
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopReading()
      } else {
        startReading()
      }
    }
    
    // 监听用户活动
    const handleUserActivity = () => {
      if (!readingTimer) {
        startReading()
      }
    }
    
    // 初始化
    if (!document.hidden) {
      startReading()
    }
    
    // 添加事件监听器
    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('mousemove', handleUserActivity)
    window.addEventListener('keypress', handleUserActivity)
    window.addEventListener('scroll', handleUserActivity)
    window.addEventListener('click', handleUserActivity)
    
    return () => {
      stopReading()
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('mousemove', handleUserActivity)
      window.removeEventListener('keypress', handleUserActivity)
      window.removeEventListener('scroll', handleUserActivity)
      window.removeEventListener('click', handleUserActivity)
    }
  }, [isClient])

  // 控制Lottie动画播放
  useEffect(() => {
    if (lottieRef.current && isClient) {
      // 根据植物生长阶段控制动画，不循环
      if (plantState.stage === PlantStage.SEED) {
        // 种子阶段：只播放动画的前12.5%（0-12帧）
        lottieRef.current.playSegments([0, 12], false);
      } else if (plantState.stage === PlantStage.SPROUT) {
        // 发芽阶段：播放动画的12.5%-37.5%（12-37帧）
        lottieRef.current.playSegments([12, 37], false);
      } else if (plantState.stage === PlantStage.YOUNG) {
        // 幼苗阶段：播放动画的37.5%-62.5%（37-62帧）
        lottieRef.current.playSegments([37, 62], false);
      } else if (plantState.stage === PlantStage.MATURE) {
        // 成熟阶段：播放动画的62.5%-87.5%（62-87帧）
        lottieRef.current.playSegments([62, 87], false);
      } else if (plantState.stage === PlantStage.FLOWERING) {
        // 开花阶段：播放动画的87.5%-100%（87-100帧）
        lottieRef.current.playSegments([87, 100], false);
      }
    }
  }, [plantState.stage, isClient]) // 添加isClient依赖，确保客户端渲染后触发动画
  
  // 初始化动画
  useEffect(() => {
    if (lottieRef.current && isClient) {
      // 延迟一小段时间确保Lottie组件已完全加载
      const timer = setTimeout(() => {
        if (plantState.stage === PlantStage.SEED) {
          lottieRef.current.playSegments([0, 12], false);
        } else if (plantState.stage === PlantStage.SPROUT) {
          lottieRef.current.playSegments([12, 37], false);
        } else if (plantState.stage === PlantStage.YOUNG) {
          lottieRef.current.playSegments([37, 62], false);
        } else if (plantState.stage === PlantStage.MATURE) {
          lottieRef.current.playSegments([62, 87], false);
        } else if (plantState.stage === PlantStage.FLOWERING) {
          lottieRef.current.playSegments([87, 100], false);
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [isClient, plantState.stage])

  // 检查是否可以升级到下一阶段
  const checkGrowth = () => {
    setPlantState(prevState => {
      if (prevState.stage < PlantStage.FLOWERING) {
        // 基于阅读进度自动升级
        const { readingProgress, stage } = prevState
        // 每个阶段需要的阅读进度阈值
        const thresholds = [25, 50, 75, 95] // 种子到发芽，发芽到幼苗，幼苗到成熟，成熟到开花
        
        if (readingProgress >= thresholds[stage]) {
          return { ...prevState, stage: stage + 1 }
        }
      }
      return prevState
    })
  }

  // 基于阅读进度更新植物状态和动画
  useEffect(() => {
    if (!isClient) return
    
    // 检查是否达到25%、50%、75%或100%的里程碑
    const milestones = [25, 50, 75, 100];
    const reachedMilestone = milestones.find(milestone => 
      plantState.prevReadingProgress < milestone && plantState.readingProgress >= milestone
    );
    
    if (reachedMilestone) {
      // 根据达到的里程碑播放对应的动画段
      if (lottieRef.current) {
        if (reachedMilestone === 25) {
          // 25%进度：播放0-25帧动画并定格
          lottieRef.current.playSegments([0, 25], false);
        } else if (reachedMilestone === 50) {
          // 50%进度：播放25-50帧动画并定格
          lottieRef.current.playSegments([25, 50], false);
        } else if (reachedMilestone === 75) {
          // 75%进度：播放50-75帧动画并定格
          lottieRef.current.playSegments([50, 75], false);
        } else if (reachedMilestone === 100) {
          // 100%进度：播放75-100帧动画并定格
          lottieRef.current.playSegments([75, 100], false);
        }
      }
      
      // 更新上一次的阅读进度
      setPlantState(prevState => ({
        ...prevState,
        prevReadingProgress: reachedMilestone
      }))
    }
  }, [plantState.readingProgress, isClient])

  // 重置植物状态
  const resetPlant = () => {
    // 创建一个新的初始状态，确保prevReadingProgress也重置为0
    const resetState = {
      ...initialPlantState,
      lastReadingDate: new Date().toISOString().split('T')[0]
    }
    setPlantState(resetState)
    // 播放种子阶段动画
    if (lottieRef.current) {
      lottieRef.current.playSegments([0, 12], false);
    }
  }

  // 切换最小化状态
  const toggleMinimize = () => {
    setPlantState(prevState => ({
      ...prevState,
      isMinimized: !prevState.isMinimized
    }))
  }

  // 当从最小化状态恢复时，重新触发动画显示正确的生长阶段
  useEffect(() => {
    if (lottieRef.current && isClient && !plantState.isMinimized) {
      // 延迟一小段时间确保组件已完全渲染
      const timer = setTimeout(() => {
        if (plantState.stage === PlantStage.SEED) {
          lottieRef.current.playSegments([0, 12], false);
        } else if (plantState.stage === PlantStage.SPROUT) {
          lottieRef.current.playSegments([12, 37], false);
        } else if (plantState.stage === PlantStage.YOUNG) {
          lottieRef.current.playSegments([37, 62], false);
        } else if (plantState.stage === PlantStage.MATURE) {
          lottieRef.current.playSegments([62, 87], false);
        } else if (plantState.stage === PlantStage.FLOWERING) {
          lottieRef.current.playSegments([87, 100], false);
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [plantState.isMinimized, isClient, plantState.stage])

  // 获取植物状态描述
  const getPlantStatus = () => {
    const { readingProgress } = plantState
    if (readingProgress < 33) {
      return 'needs care'
    } else if (readingProgress < 66) {
      return 'okay'
    } else {
      return 'thriving'
    }
  }

  // 获取当前阶段的植物名称
  const getStageName = () => {
    const stageNames = ['Seed', 'Sprout', 'Young Plant', 'Mature Plant', 'Flowering']
    return stageNames[plantState.stage]
  }

  // 如果不是客户端，不渲染组件
  if (!isClient) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 hidden md:block">
      {plantState.isMinimized ? (
        // 最小化状态
        <button
          onClick={toggleMinimize}
          className={`backdrop-blur-xl ${resolvedTheme === 'dark' ? 'bg-black/40 border-white/10 text-gray-200 hover:bg-black/50' : 'bg-white/40 border-white/50 text-green-900 hover:bg-white/50'} p-1 rounded-full shadow-lg shadow-green-500/10 transition-all border`}
          aria-label="Expand plant"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16" />
          </svg>
        </button>
      ) : (
        // 完整植物组件
        <div className={`backdrop-blur-xl ${resolvedTheme === 'dark' ? 'bg-black/40 border-white/10' : 'bg-white/40 border-white/50'} rounded-lg shadow-xl shadow-green-500/10 p-2 w-36 border`}>
          {/* 标题栏 */}
          <div className="flex justify-between items-center mb-2">
            <h3 className={`text-xs font-medium ${resolvedTheme === 'dark' ? 'text-gray-200' : 'text-green-900'}`}>My Monstera</h3>
            <button
              onClick={toggleMinimize}
              className={`${resolvedTheme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}`}
              aria-label="Minimize plant"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
          </div>

          {/* 植物状态 */}
          <div className="text-center mb-2">
            <div className={`text-xs ${resolvedTheme === 'dark' ? 'text-gray-300' : 'text-green-800'}`}>{getStageName()}</div>
            <div className={`text-xs font-medium ${
              getPlantStatus() === 'needs care' ? 'text-red-500' : 
              getPlantStatus() === 'okay' ? 'text-yellow-500' : 'text-green-500'
            }`}>
              {getPlantStatus()}
            </div>
          </div>

          {/* 植物容器 */}
          <div className="flex justify-center mb-2 h-16 bg-gradient-to-b from-sky-100/50 to-green-50/50 dark:from-sky-900/50 dark:to-green-900/50 rounded-lg relative overflow-hidden">
            {/* 植物Lottie动画渲染 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Lottie
                lottieRef={lottieRef}
                animationData={monsteraLeafAnimation}
                loop={false}
                autoplay={false}
                style={{ width: '60px', height: '60px' }}
              />
            </div>
          </div>

          {/* 资源条 */}
          <div className="mb-2">
            <div>
              <div className={`flex justify-between text-xs mb-0.5 ${resolvedTheme === 'dark' ? 'text-gray-300' : 'text-green-800'}`}>
                <span>Reading</span>
                <span>{Math.round(plantState.readingProgress)}%</span>
              </div>
              <div className={`w-full rounded-full h-1 ${resolvedTheme === 'dark' ? 'bg-white/20' : 'bg-green-900/20'}`}>
                <div
                  className="bg-green-500 h-1 rounded-full transition-all duration-500"
                  style={{ width: `${plantState.readingProgress}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* 提示信息 */}
          <div className={`text-xs text-center mb-2 ${resolvedTheme === 'dark' ? 'text-gray-400' : 'text-green-700'}`}>
            Turn your reading time into a new leaf.
          </div>

          {/* 操作按钮 */}
          <div className="flex justify-between">
            <button
              onClick={toggleMinimize}
              className={`text-xs ${resolvedTheme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-green-700 hover:text-green-900'} transition-colors`}
            >
              Minimize
            </button>
            <button
              onClick={resetPlant}
              className={`text-xs ${resolvedTheme === 'dark' ? 'text-red-400 hover:text-red-200' : 'text-red-600 hover:text-red-800'} transition-colors`}
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  )
}