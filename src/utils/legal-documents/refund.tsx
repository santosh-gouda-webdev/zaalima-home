
import {  CheckCircle, XCircle, Mail, Clock, Ban, AlertTriangle } from "lucide-react"

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        


        <div className="max-w-4xl mx-auto">
          <div className="bg-muted/30 rounded-lg p-6 mb-8">
            <p className="text-lg leading-relaxed">
              At Zaalima Development Pvt. Ltd., we value transparency and want to ensure you have a clear understanding
              of our refund process. Please read this policy carefully before making a purchase.
            </p>
          </div>

          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <h2 className="text-2xl font-semibold text-primary">Eligibility for Refunds</h2>
            </div>
            <p className="mb-4">You may be eligible for a refund under the following conditions:</p>
            <ul className="space-y-3">
              <li>The service, course, or internship has not been accessed or started.</li>
              <li>
                A technical issue on our platform prevents you from accessing the purchased service, and the issue
                cannot be resolved within 7 business days.
              </li>
              <li>
                A cancellation request is made within 7 days of payment, provided the service has not been utilized.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <XCircle className="h-6 w-6 text-red-500" />
              <h2 className="text-2xl font-semibold text-primary">Non-Refundable Items</h2>
            </div>
            <p className="mb-4">The following are non-refundable:</p>
            <ul className="space-y-3">
              <li>Fees for completed or ongoing internships, courses, or hackathons.</li>
              <li>Payments for digital products, including downloadable resources, templates, or certificates.</li>
              <li>Customized or personalized services designed specifically for you.</li>
            </ul>
          </section>

          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="h-6 w-6 text-blue-500" />
              <h2 className="text-2xl font-semibold text-primary">Refund Request Process</h2>
            </div>
            <p className="mb-4">To request a refund, please follow these steps:</p>
            <div className="bg-muted/50 rounded-lg p-6">
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                    1
                  </span>
                  <span>
                    Email us at <strong>support@zaalima.in</strong> with the subject line: "Refund Request".
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                    2
                  </span>
                  <span>Provide your order ID, payment receipt, and a clear reason for the refund.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                    3
                  </span>
                  <span>Our support team will review your request and respond within 5 business days.</span>
                </li>
              </ol>
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">💳</span>
              <h2 className="text-2xl font-semibold text-primary">Refund Method</h2>
            </div>
            <ul className="space-y-3">
              <li>Approved refunds will be processed to your original payment method.</li>
              <li>
                Depending on your bank or payment provider, the refund may take 7–10 business days to appear in your
                account.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-6 w-6 text-orange-500" />
              <h2 className="text-2xl font-semibold text-primary">Refund Timeframe</h2>
            </div>
            <ul className="space-y-3">
              <li>
                Requests must be submitted within 7 days of payment for courses or hackathons that have not been
                accessed.
              </li>
              <li>For technical issues that prevent access, requests must be made within 14 days.</li>
            </ul>
          </section>

          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Ban className="h-6 w-6 text-red-500" />
              <h2 className="text-2xl font-semibold text-primary">Cancellations</h2>
            </div>
            <ul className="space-y-3">
              <li>
                Refunds are available only for cancellations made before accessing the service or participating in an
                event.
              </li>
              <li>No refunds will be issued once the service has been accessed or the event has started.</li>
            </ul>
          </section>

          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-6 w-6 text-yellow-500" />
              <h2 className="text-2xl font-semibold text-primary">Exclusions & Disclaimers</h2>
            </div>
            <ul className="space-y-3">
              <li>
                Refunds will not be granted if you are unable to complete a course, internship, or hackathon due to
                personal reasons.
              </li>
              <li>
                Zaalima Development Pvt. Ltd. reserves the right to decline refund requests in cases of misuse, policy
                violations, or false claims.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Contact Information</h2>
            <p className="mb-4">For questions or support related to this Refund Policy, please contact us:</p>
            <div className="bg-muted/50 rounded-lg p-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span>📧</span>
                  <span>
                    <strong>Email:</strong> support@zaalima.in
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📞</span>
                  <span>
                    <strong>Phone:</strong> +91 8277035909
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
