"use client";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "./components/Sidebar";
import "./globals.css";
import Script from "next/script";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter()

  const isAuthPage =
    pathname === "/AdminLogin" ||
    pathname === "/Forgot" ||
    pathname === "/Signup";

    useEffect(() => {
      const token = localStorage.getItem('camrilla_token')
      if(!token){
        router.replace('/AdminLogin')
      }
    }, [])
    

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&ampdisplay=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="/assets/vendor/fonts/remixicon/remixicon.css"
        />
        <link rel="stylesheet" href="/assets/vendor/fonts/flag-icons.css" />

        <link
          rel="stylesheet"
          href="/assets/vendor/libs/node-waves/node-waves.css"
        />

        <link
          rel="stylesheet"
          href="/assets/vendor/css/rtl/core.css"
          className="template-customizer-core-css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/css/rtl/theme-default.css"
          className="template-customizer-theme-css"
        />
        <link rel="stylesheet" href="/assets/css/demo.css" />

        <link
          rel="stylesheet"
          href="/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/libs/typeahead-js/typeahead.css"
        />

        <link
          rel="stylesheet"
          href="/assets/vendor/libs/@form-validation/form-validation.css"
        />

        <link rel="stylesheet" href="/assets/vendor/css/pages/page-auth.css" />
        <link
          rel="stylesheet"
          href="/assets/vendor/css/pages/app-calendar.css"
        />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        ></link>

        <link
          rel="stylesheet"
          href="/assets/vendor/css/pages/page-profile.css"
        />

        <link rel="stylesheet" href="/assets/vendor/css/pages/page-auth.css" />

        <link rel="stylesheet" href="/assets/vendor/css/pages/page-faq.css" />

        <link
          rel="stylesheet"
          href="/assets/vendor/css/pages/page-pricing.css"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {isAuthPage ? (
          <> {children} </>
        ) : (
          <>
            <div className="layout-wrapper layout-content-navbar">
              <div className="layout-container">
                <Sidebar />
                <div className="layout-page">
                  <Navbar />
                  <div className="content-wrapper">{children}</div>
                </div>
              </div>
            </div>
          </>
        )}

        <Script
          src="/assets/vendor/js/helpers.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/vendor/js/template-customizer.js"
          strategy="beforeInteractive"
        />
        <Script src="/assets/js/config.js" strategy="beforeInteractive" />

        <Script src="/assets/vendor/libs/jquery/jquery.js" />
        <Script src="/assets/vendor/libs/popper/popper.js" />
        <Script src="/assets/vendor/js/bootstrap.js" />
        <Script src="/assets/vendor/libs/node-waves/node-waves.js" />
        <Script src="/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js" />
        <Script src="/assets/vendor/libs/hammer/hammer.js" />
        <Script src="/assets/vendor/libs/i18n/i18n.js" />
        <Script src="/assets/vendor/libs/typeahead-js/typeahead.js" />
        <Script src="/assets/vendor/js/menu.js" />

        <Script src="/assets/vendor/libs/@form-validation/popular.js" />
        <Script src="/assets/vendor/libs/@form-validation/bootstrap5.js" />
        <Script src="/assets/vendor/libs/@form-validation/auto-focus.js" />

        <Script src="/assets/js/main.js" />

        <Script src="/assets/js/pages-auth.js" />

        <Script src="/assets/js/pages-profile-user.js" />

        <Script src="/assets/js/pages-auth.js" />
        <Script src="/assets//js/pages-pricing.js" />
      </body>
    </html>
  );
}
