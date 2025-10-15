
import {  Building2 } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 glass-effect border-b">
        <div className="container mx-auto px-4 py-4">
         
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Building2 className="h-4 w-4" />
              Legal Documentation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Terms & <span className="gradient-text">Conditions</span>
            </h1>
            <div className="bg-muted/30 rounded-2xl p-8 mb-12">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Welcome to Zaalima Development Pvt. Ltd. By accessing or using our Services, you agree to comply with
                and be bound by the following Terms & Conditions. Please read them carefully before using our Services.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">
                  1
                </span>
                Definitions
              </h2>
              <div className="grid gap-6">
                <div className="p-6 rounded-xl bg-card border border-border/50">
                  <h3 className="font-semibold text-foreground mb-2">Services:</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All software products, tools, platforms, training programs, internships, hackathons, and services
                    offered by Zaalima Development Pvt. Ltd., including but not limited to online platforms, cloud-based
                    solutions, and associated services.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border/50">
                  <h3 className="font-semibold text-foreground mb-2">User:</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Any individual or entity who accesses, downloads, installs, enrolls in, or uses our Services.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border/50">
                  <h3 className="font-semibold text-foreground mb-2">Account:</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The user profile created on our platform to access Services.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border/50">
                  <h3 className="font-semibold text-foreground mb-2">Content:</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Any materials provided through our Services, including but not limited to software, documentation,
                    graphics, videos, training resources, or data.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">
                  2
                </span>
                User Obligations
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Eligibility:",
                    content:
                      "You must be at least 18 years of age or the legal age of majority in your jurisdiction to access or use our Services.",
                  },
                  {
                    title: "Account Information:",
                    content:
                      "You agree to provide accurate, up-to-date, and complete information when creating an account or using our Services.",
                  },
                  {
                    title: "Lawful Use:",
                    content:
                      "You agree not to use the Services for unlawful purposes or in violation of any applicable laws, including intellectual property rights.",
                  },
                  {
                    title: "Access & Use:",
                    content:
                      "You must not attempt to decompile, reverse-engineer, hack, or otherwise interfere with our software or Services.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-6 rounded-xl bg-card border border-border/50">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-3" />
                    <div>
                      <span className="font-semibold text-foreground">{item.title}</span>{" "}
                      <span className="text-muted-foreground leading-relaxed">{item.content}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">
                  3
                </span>
                User Account
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4 p-6 rounded-xl bg-card border border-border/50">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-3" />
                  <div>
                    <span className="font-semibold text-foreground">
                      Certain features of the Services may require an account.
                    </span>
                  </div>
                </div>
                <div className="flex gap-4 p-6 rounded-xl bg-card border border-border/50">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-3" />
                  <div>
                    <span className="font-semibold text-foreground">
                      You are responsible for maintaining the confidentiality of your login credentials and all
                      activities under your account.
                    </span>
                  </div>
                </div>
                <div className="flex gap-4 p-6 rounded-xl bg-card border border-border/50">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-3" />
                  <div>
                    <span className="font-semibold text-foreground">
                      You must notify us immediately of any unauthorized access or security breaches.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">
                  4
                </span>
                License & Intellectual Property
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4 p-6 rounded-xl bg-card border border-border/50">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-3" />
                  <div>
                    <span className="font-semibold text-foreground">License:</span>{" "}
                    <span className="text-muted-foreground leading-relaxed">
                      We grant you a limited, non-exclusive, non-transferable license to use our Services in accordance
                      with these Terms for personal or business purposes.
                    </span>
                  </div>
                </div>
                <div className="flex gap-4 p-6 rounded-xl bg-card border border-border/50">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-3" />
                  <div>
                    <span className="font-semibold text-foreground">Ownership:</span>{" "}
                    <span className="text-muted-foreground leading-relaxed">
                      All Content, including software, documentation, trademarks, and logos, is owned by or licensed to
                      Zaalima Development Pvt. Ltd. and protected under intellectual property laws.
                    </span>
                  </div>
                </div>
                <div className="flex gap-4 p-6 rounded-xl bg-card border border-border/50">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-3" />
                  <div>
                    <span className="font-semibold text-foreground">Restrictions:</span>{" "}
                    <span className="text-muted-foreground leading-relaxed">
                      You may not sublicense, rent, lease, distribute, or otherwise misuse the Services.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">
                  5
                </span>
                Service Availability
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4 p-6 rounded-xl bg-card border border-border/50">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-3" />
                  <div>
                    <span className="font-semibold text-foreground">
                      We strive to keep our Services available 24/7, but uninterrupted access is not guaranteed.
                    </span>
                  </div>
                </div>
                <div className="flex gap-4 p-6 rounded-xl bg-card border border-border/50">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-3" />
                  <div>
                    <span className="font-semibold text-foreground">
                      We may modify, suspend, or discontinue any aspect of the Services at any time, without prior
                      notice.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">
                  6
                </span>
                Software & Updates
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4 p-6 rounded-xl bg-card border border-border/50">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-3" />
                  <div>
                    <span className="font-semibold text-foreground">License:</span>{" "}
                    <span className="text-muted-foreground leading-relaxed">
                      Upon payment (if applicable), we grant you a license to use our software as per these Terms.
                    </span>
                  </div>
                </div>
                <div className="flex gap-4 p-6 rounded-xl bg-card border border-border/50">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-3" />
                  <div>
                    <span className="font-semibold text-foreground">Updates:</span>{" "}
                    <span className="text-muted-foreground leading-relaxed">
                      We may release updates, bug fixes, or new features. These may be required to continue using the
                      Services.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">
                  7
                </span>
                Payment & Fees
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4 p-6 rounded-xl bg-card border border-border/50">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-3" />
                  <div>
                    <span className="font-semibold text-foreground">Subscription Fees:</span>{" "}
                    <span className="text-muted-foreground leading-relaxed">
                      Some Services may require a subscription or one-time payment. Fees will be clearly disclosed
                      before purchase.
                    </span>
                  </div>
                </div>
                <div className="flex gap-4 p-6 rounded-xl bg-card border border-border/50">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-3" />
                  <div>
                    <span className="font-semibold text-foreground">Billing:</span>{" "}
                    <span className="text-muted-foreground leading-relaxed">
                      Payments are processed through third-party providers. You agree to pay all applicable fees and
                      taxes associated with your use of the Services.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">
                  8
                </span>
                Termination
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4 p-6 rounded-xl bg-card border border-border/50">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-3" />
                  <div>
                    <span className="font-semibold text-foreground">User Termination:</span>{" "}
                    <span className="text-muted-foreground leading-relaxed">
                      You may stop using our Services and delete your account at any time, subject to clearing
                      outstanding payments.
                    </span>
                  </div>
                </div>
                <div className="flex gap-4 p-6 rounded-xl bg-card border border-border/50">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-3" />
                  <div>
                    <span className="font-semibold text-foreground">Company Termination:</span>{" "}
                    <span className="text-muted-foreground leading-relaxed">
                      Zaalima Development Pvt. Ltd. reserves the right to suspend or terminate your access if you
                      violate these Terms, fail to pay fees, or misuse our Services.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">
                  9
                </span>
                Privacy & Data
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4 p-6 rounded-xl bg-card border border-border/50">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-3" />
                  <div>
                    <span className="font-semibold text-foreground">Privacy Policy:</span>{" "}
                    <span className="text-muted-foreground leading-relaxed">
                      Use of your personal data is governed by our Privacy Policy. By using our Services, you agree to
                      data collection and processing in accordance with it.
                    </span>
                  </div>
                </div>
                <div className="flex gap-4 p-6 rounded-xl bg-card border border-border/50">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-3" />
                  <div>
                    <span className="font-semibold text-foreground">Data Protection:</span>{" "}
                    <span className="text-muted-foreground leading-relaxed">
                      We take reasonable measures to safeguard your information, but we cannot guarantee absolute
                      security.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">
                  10
                </span>
                Limitation of Liability
              </h2>
              <div className="p-6 rounded-xl bg-card border border-border/50">
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, Zaalima Development Pvt. Ltd. shall not be liable for
                  indirect, incidental, special, or consequential damages arising from your use of our Services.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">
                  11
                </span>
                Governing Law
              </h2>
              <div className="p-6 rounded-xl bg-card border border-border/50">
                <p className="text-muted-foreground leading-relaxed">
                  These Terms are governed by the laws of India, and any disputes shall be subject to the exclusive
                  jurisdiction of the courts of Odisha.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">
                  12
                </span>
                Contact Us
              </h2>
              <div className="p-6 rounded-xl bg-card border border-border/50">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For questions or concerns regarding these Terms, please reach us at:
                </p>
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
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
