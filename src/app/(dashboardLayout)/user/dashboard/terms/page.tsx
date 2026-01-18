const UserTerms = () => {
    return (
      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-10 space-y-6">
        <h1 className="text-2xl sm:text-3xl font-semibold">User Terms & Conditions</h1>
  
        <p className="text-gray-600 text-sm sm:text-base">
          By using this platform, you agree to follow these terms and conditions. These rules
          ensure a safe, fair, and enjoyable experience for all users.
        </p>
  
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">1. Account Responsibility</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            You are responsible for maintaining the confidentiality of your account credentials
            and all activities that occur under your account.
          </p>
        </section>
  
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">2. Event Participation</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Users must provide accurate information when joining events and follow all event
            rules set by the host or organizer.
          </p>
        </section>
  
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">3. Payments & Refunds</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            All payments are processed securely. Refunds depend on the event organizer’s policy.
          </p>
        </section>
  
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">4. Misuse & Suspension</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Any misuse, fraud, or abusive behavior may result in account suspension or permanent
            termination.
          </p>
        </section>
  
        <p className="text-gray-500 text-sm">
          If you have any questions, please contact our support team.
        </p>
      </div>
    );
  };
  
  export default UserTerms;
  