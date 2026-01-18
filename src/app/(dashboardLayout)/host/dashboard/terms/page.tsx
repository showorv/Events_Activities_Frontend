const HostTerms = () => {
    return (
      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-10 space-y-6">
        <h1 className="text-2xl sm:text-3xl font-semibold">Host Terms & Conditions</h1>
  
        <p className="text-gray-600 text-sm sm:text-base">
          These terms apply to all hosts who create and manage events on this platform. By
          becoming a host, you agree to comply with these rules.
        </p>
  
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">1. Event Authenticity</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Hosts must provide accurate, truthful, and complete event information. Misleading
            events may be removed without notice.
          </p>
        </section>
  
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">2. Payment Handling</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Hosts must honor all bookings and follow refund policies clearly stated in their
            event listings.
          </p>
        </section>
  
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">3. Event Responsibility</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Hosts are fully responsible for event execution, safety, and participant experience.
          </p>
        </section>
  
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">4. Platform Compliance</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Any violation of platform policies may result in host suspension or permanent removal.
          </p>
        </section>
  
        <p className="text-gray-500 text-sm">
          For any clarification, please contact the admin team.
        </p>
      </div>
    );
  };
  
  export default HostTerms;
  