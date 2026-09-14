// Campus Connect Portal - DetailModal Component (Experiment 5)
// Modal overlay displaying complete notice or assignment details

export default function DetailModal({ isOpen, item, onClose }) {
  if (!isOpen || !item) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()} // Prevent clicking inside modal from closing
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-header">
          <h3>{item.title}</h3>
          <button
            type="button"
            className="btn-modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>

        <div className="modal-body">
          {item.meta && (
            <p style={{ color: '#64748b', fontSize: '0.88rem', marginBottom: '14px', fontWeight: 600 }}>
              📍 {item.meta}
            </p>
          )}

          <p style={{ marginBottom: '16px' }}>
            {item.description || 'Full circular and schedule details are available on the campus portal.'}
          </p>

          {item.details && (
            <div style={{ background: '#f8fafc', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.88rem' }}>
              <strong>Additional Notes:</strong>
              <p style={{ marginTop: '6px' }}>{item.details}</p>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button
            type="button"
            className="btn-modal-action"
            onClick={onClose}
          >
            Close & Return
          </button>
        </div>
      </div>
    </div>
  );
}
