import Photos from "@/components/About/Photos";
import Experience from "@/components/Experience/Experience";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DummyTabs = () => {
  return (
    <section id="tabs" className="mt-10">
      <Tabs defaultValue="work">
        <TabsList variant="line">
          <TabsTrigger value="work" className="font-mono">
            Work
          </TabsTrigger>
          <TabsTrigger value="photos" className="font-mono">
            Photos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="work" className="mt-4">
          <Experience showHeading={false} accordionState="first" />
        </TabsContent>

        <TabsContent value="photos" className="mt-4">
          <Photos showHeading={false} />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default DummyTabs;
