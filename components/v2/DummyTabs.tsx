import Photos from "@/components/About/Photos";
import Experience from "@/components/Experience/Experience";
import Gears from "@/components/Gears/Gears";
import Movies from "@/components/Movies/Movies";
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
          <TabsTrigger value="gears" className="font-mono">
            Gears
          </TabsTrigger>
          <TabsTrigger value="movies" className="font-mono">
            Movies
          </TabsTrigger>
        </TabsList>

        <TabsContent value="work" className="mt-4">
          <Experience showHeading={false} accordionState="first" />
        </TabsContent>

        <TabsContent value="photos" className="mt-4">
          <Photos showHeading={false} />
        </TabsContent>

        <TabsContent value="gears" className="mt-4">
          <Gears showHeading={false} />
        </TabsContent>

        <TabsContent value="movies" className="mt-4">
          <Movies showHeading={false} />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default DummyTabs;
