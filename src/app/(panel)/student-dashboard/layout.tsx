import { UserProvider } from "@/context/UserContext";
import LayoutContent from "./components/sideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl">
      <body>
        <UserProvider>
            <LayoutContent>
                {children}
            </LayoutContent>
        </UserProvider>
      </body>
    </html>
  );
}