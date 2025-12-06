'use client'

interface SupportModalProps {
  isOpen: boolean
  onCloseAction: () => void
}

export default function SupportModal({ isOpen, onCloseAction }: SupportModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 背景遮罩 */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onCloseAction}
      />
      
      {/* 弹窗内容 */}
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 m-4 max-w-md w-full">
        {/* 关闭按钮 */}
        <button
          onClick={onCloseAction}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          aria-label="Close"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* 内容 */}
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 mb-4">
            <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100 mb-2">
            Contact Support
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            For business inquiries or questions, please reach out to us via email.
          </p>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-md p-3 mb-4">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Email:</p>
            <a 
              href="mailto:chenrunchen84@gmail.com" 
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              chenrunchen84@gmail.com
            </a>
          </div>
          <button
            onClick={onCloseAction}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  )
}