// Campus Connect Portal - ItemCard Component (Experiment 5)
// Highly reusable child component rendering notice rows, assignment cards, or portal items

export default function ItemCard({
  title,
  meta,
  badge,
  badgeType = 'new',
  actionText = 'View Details',
  onAction,
  actionBtnClass = 'btn-view-details',
  children
}) {
  return (
    <article className="notice-card">
      <div className="notice-left">
        <h4 className="notice-title">
          {title}
          {badge && <span className={`badge badge-${badgeType}`}>{badge}</span>}
        </h4>
        {meta && <p className="notice-meta">{meta}</p>}
        {children}
      </div>

      {actionText && onAction && (
        <button
          type="button"
          className={actionBtnClass}
          onClick={onAction}
        >
          {actionText}
        </button>
      )}
    </article>
  );
}
