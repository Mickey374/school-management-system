export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <div className="h-screen flex">
      <div className="w-[14%] md:w-[8%] lg:w-[14%] xl:w-[16%] bg-black-10">left</div>
      <div className="w-[86%] md:w-[92%] lg:w-[86%] xl:w-[84%] bg-blue-200">right</div>
     </div>
    
  );
}
