const MobileEmergencyServices = () => {
  return (
    <section className="px-4 py-6">
      
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-foreground">
          Emergency Services
        </h2>
        <button className="text-sm font-medium text-primary">
          See all
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-3">

        {/* Bike Repair */}
        <div className="relative h-28 overflow-hidden rounded-2xl bg-gradient-to-br from-orange-100 via-orange-50 to-white px-4 py-3">
          <h3 className="text-sm font-semibold text-foreground">
            Bike Repair
          </h3>

          <img
            src="/images/bike-repair.png"
            alt="Bike Repair"
            className="absolute -bottom-2 -right-1 h-32 w-32 object-contain"
          />
        </div>

        {/* Car Repair */}
        <div className="relative h-28 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 via-blue-50 to-white px-4 py-3">
          <h3 className="text-sm font-semibold text-foreground">
            Car Repair
          </h3>

          <img
            src="/images/car-repair.png"
            alt="Car Repair"
            className="absolute -bottom-2 -right-1 h-32 w-32 object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default MobileEmergencyServices;
