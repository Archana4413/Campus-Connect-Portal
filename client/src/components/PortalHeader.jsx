// Campus Connect Portal - PortalHeader Component (Experiment 5)
// Modular child component for portal top banner and return navigation

export default function PortalHeader({
  title = 'Student Portal',
  icon = '🎓',
  subtitle = 'Welcome, RVU Student',
  onBack
}) {
  return (
    <div className="portal-header">
      <div className="portal-header-info">
        <h2 className="portal-header-title">
          <span>{icon}</span> {title}
        </h2>
        <p className="portal-header-subtitle">{subtitle}</p>
      </div>

      <button
        type="button"
        className="btn-back-campus"
        onClick={onBack}
        title="Return to Main Campus View"
      >
        ← Back to Main Campus View
      </button>
    </div>
  );
}
