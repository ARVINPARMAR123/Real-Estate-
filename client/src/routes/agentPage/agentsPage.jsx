import "./agentsPage.scss";

const agents = [
  {
    name: "Priya Sharma",
    role: "Luxury Property Specialist",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    phone: "+91 98765 12345",
    email: "priya@hevenedge.com",
  },
  {
    name: "Aarav Mehta",
    role: "Senior Real Estate Consultant",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    phone: "+91 98765 98765",
    email: "aarav@hevenedge.com",
  },
  {
    name: "Simran Kaur",
    role: "Residential Sales Expert",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    phone: "+91 91234 56789",
    email: "simran@hevenedge.com",
  },
];

const Agents = () => {
  return (
    <div className="agents-page">
      <div className="agents-hero">
        <h1>Meet Our Experts</h1>
        <p>
          Professional agents ready to guide you in your real estate journey.
        </p>
      </div>

      <div className="agents-list">
        {agents.map((agent, index) => (
          <div className="agent-card" key={index}>
            <img src={agent.image} alt={agent.name} />
            <h3>{agent.name}</h3>
            <p className="role">{agent.role}</p>
            <p className="info">📞 {agent.phone}</p>
            <p className="info">✉️ {agent.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agents;
