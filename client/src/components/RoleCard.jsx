// Campus Connect Portal - RoleCard Component (Experiment 5)
// Reusable presentation component demonstrating Props in React

export default function RoleCard({
  title,
  icon,
  features = [],
  borderClass = 'student-border',
  bgBtnClass = 'student-bg',
  btnText = 'Access View',
  onSelect,
  isActive = false
}) {
  return (
    <article
      className={`role-card ${borderClass}`}
      style={{
        boxShadow: isActive ? '0 12px 30px rgba(13, 92, 58, 0.25)' : undefined,
        transform: isActive ? 'scale(1.02)' : undefined,
        outline: isActive ? '3px solid #107c41' : 'none'
      }}
    >
      <div className="role-icon">{icon}</div>

      <h3>{title}</h3>

      <ul className="feature-bullets">
        {features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>

      <button
        type="button"
        className={`btn-portal ${bgBtnClass}`}
        onClick={onSelect}
      >
        {isActive ? `✓ Active (${title})` : btnText}
      </button>
    </article>
  );
}
