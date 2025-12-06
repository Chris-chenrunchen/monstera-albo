import { Metadata } from 'next'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Monstera Albo Care Guide',
}

export default function PrivacyPolicy() {
  return (
    <SectionContainer>
      <PageTitle>Privacy Policy</PageTitle>
      <div className="prose dark:prose-invert max-w-none">
        <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
        
        <h2>Information We Collect</h2>
        <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, and in connection with other activities, services, features or resources we make available on our Site.</p>
        
        <h2>How We Use Collected Information</h2>
        <p>Monstera Albo Care Guide may collect and use Users personal information for the following purposes:</p>
        <ul>
          <li>To improve customer service</li>
          <li>To personalize user experience</li>
          <li>To improve our Site</li>
          <li>To process payments</li>
          <li>To send periodic emails</li>
        </ul>
        
        <h2>How We Protect Your Information</h2>
        <p>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.</p>
        
        <h2>Sharing Your Personal Information</h2>
        <p>We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.</p>
        
        <h2>Changes to This Privacy Policy</h2>
        <p>Monstera Albo Care Guide has the discretion to update this privacy policy at any time. When we do, we will post a notification on the main page of our Site and send you an email. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.</p>
        
        <h2>Your Acceptance of These Terms</h2>
        <p>By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.</p>
        
        <h2>Contacting Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us.</p>
      </div>
    </SectionContainer>
  )
}