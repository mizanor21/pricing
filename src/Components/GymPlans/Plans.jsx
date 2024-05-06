import Plan from "./Plan";

const Plans = () => {
  const plans = [
    {
      name: "Basic Membership",
      price: 30.0,
      duration: "1 month",
      includes: [
        "Access to gym facilities",
        "Limited group fitness classes",
        "Access to weight room",
      ],
    },
    {
      name: "Standard Membership",
      price: 50.0,
      duration: "3 months",
      includes: [
        "Access to gym facilities",
        "Unlimited group fitness classes",
        "Access to sauna",
        "Access to swimming pool",
      ],
    },
    {
      name: "Premium Membership",
      price: 80.0,
      duration: "6 months",
      includes: [
        "Access to gym facilities 24/7",
        "Unlimited group fitness classes",
        "2 personal training sessions per week",
        "Access to sauna and steam room",
        "Access to all group exercise classes",
        "Access to tennis courts",
      ],
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 m-5">
      {plans.map((plan, i) => (
        <Plan key={i} plan={plan}></Plan>
      ))}
    </div>
  );
};

export default Plans;
