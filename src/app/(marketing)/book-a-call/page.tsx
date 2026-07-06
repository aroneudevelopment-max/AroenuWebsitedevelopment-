import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Book a Call | Aroneu",
  description: "Schedule a 15-minute introductory call with our team.",
};

export default function BookACallPage() {
  return (
    <main className="flex-1 w-full bg-paper pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-h1 mb-4 text-ink">Book a Call</h1>
          <p className="text-body opacity-80 text-ink/80 max-w-2xl mx-auto">
            Find a time that works for you. We look forward to learning more about your project and how we can help.
          </p>
        </div>

        {/* Cal.com embed container */}
        <div 
          className="bg-white rounded-2xl shadow-sm border border-zinc-200 overflow-hidden" 
          style={{ height: '700px' }}
        >
          <div style={{ width: '100%', height: '100%', overflow: 'scroll' }} id="my-cal-inline-15min"></div>
          <Script id="cal-com-embed" strategy="afterInteractive">
            {`
              (function (C, A, L) {
                let p = function (a, ar) { a.q.push(ar); };
                let d = C.document;
                C.Cal = C.Cal || function () {
                  let cal = C.Cal; let ar = arguments;
                  if (!cal.loaded) {
                    cal.ns = {}; cal.q = cal.q || [];
                    d.head.appendChild(d.createElement("script")).src = A;
                    cal.loaded = true;
                  }
                  if (ar[0] === L) {
                    const api = function () { p(api, arguments); };
                    const namespace = ar[1];
                    api.q = api.q || [];
                    if(typeof namespace === "string"){
                      cal.ns[namespace] = cal.ns[namespace] || api;
                      p(cal.ns[namespace], ar);
                      p(cal, ["initNamespace", namespace]);
                    } else p(cal, ar);
                    return;
                  }
                  p(cal, ar);
                };
              })(window, "https://app.cal.com/embed/embed.js", "init");

              Cal("init", "15min", { origin: "https://app.cal.com" });
              Cal.config = Cal.config || {};
              Cal.config.forwardQueryParams = true;

              Cal.ns["15min"]("inline", {
                elementOrSelector: "#my-cal-inline-15min",
                config: { "layout": "month_view", "useSlotsViewOnSmallScreen": "true" },
                calLink: "aroneu-development-nfqr40/15min",
              });

              Cal.ns["15min"]("ui", {
                "cssVarsPerTheme": { "dark": { "cal-brand": "#cea753" } },
                "hideEventTypeDetails": false,
                "layout": "month_view"
              });
            `}
          </Script>
        </div>
      </div>
    </main>
  );
}
