"use client";
import { useState } from "react";
import { ArrowRight } from "@/components/icons";
const verticals = [
  {
    name: "Food order",
    request: "Choose a meal and confirm the delivery details.",
    result: "Order confirmed. A receipt is routed to the operator.",
    why: "The merchant needs a usable order, not just a successful payment screen.",
  },
  {
    name: "Event ticket",
    request: "Choose an event and the number of tickets.",
    result: "A ticket with a QR code is ready for door check-in.",
    why: "The payment and the entry credential belong to the same customer journey.",
  },
  {
    name: "Utility payment",
    request: "Enter a meter and confirm the payment amount.",
    result: "The vending result is returned to the customer.",
    why: "The service result must be reconciled with the money that actually arrived.",
  },
];
export default function CommerceWalkthrough() {
  const [vertical, setVertical] = useState(0);
  const [delayed, setDelayed] = useState(false);
  const current = verticals[vertical];
  return (
    <section
      className="commerce-walkthrough section-shell"
      aria-labelledby="commerce-title"
    >
      <div className="section-intro">
        <h2 id="commerce-title">
          Change the business.
          <br />
          Keep the core.
        </h2>
        <p>
          Explore a simplified platform model.
          <br />
          <span className="example-note">
            Illustrative states · no payment is sent
          </span>
        </p>
      </div>
      <div className="commerce-controls">
        <div aria-label="Business workflow">
          {verticals.map((v, i) => (
            <button
              type="button"
              key={v.name}
              aria-pressed={vertical === i}
              onClick={() => setVertical(i)}
            >
              {v.name}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="delay-control"
          aria-pressed={delayed}
          onClick={() => setDelayed(!delayed)}
        >
          <span aria-hidden="true" />
          {delayed ? "Payment delayed" : "Payment confirmed"}
        </button>
      </div>
      <div className="commerce-path" aria-live="polite">
        <div>
          <span>Customer request</span>
          <h3>{current.name}</h3>
          <p>{current.request}</p>
        </div>
        <ArrowRight size={28} />
        <div className="commerce-core">
          <span>Shared platform</span>
          <h3>{delayed ? "Wait. Reconcile." : "Verify. Route."}</h3>
          <p>
            {delayed
              ? "A missing provider confirmation is not a completed transaction. Keep the state pending and reconcile the result."
              : "Verify the payment, maintain the transaction state and route the confirmed request to its business workflow."}
          </p>
        </div>
        <ArrowRight size={28} />
        <div>
          <span>Business result</span>
          <h3>{delayed ? "Still pending." : "Ready to fulfil."}</h3>
          <p>
            {delayed
              ? "Do not treat the purchase as fulfilled while payment remains unresolved."
              : current.result}
          </p>
        </div>
      </div>
      <div className="commerce-principle">
        <p>{current.why}</p>
        <p>
          Provider integrations, settlement and recovery sit beneath several
          customer experiences. This diagram illustrates that architecture; it
          does not contact a payment provider.
        </p>
      </div>
    </section>
  );
}
