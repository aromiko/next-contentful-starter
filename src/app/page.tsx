import { Text, textVariants } from "@/components/ui/text/text";

const Home = async () => {
  return (
    <main className="p-[6vw]">
      <div className="prose">
        <Text>My Contentful Blog</Text>
        <h1 className={textVariants({ variant: "h2" })}>My Contentful Blog</h1>
      </div>
    </main>
  );
};

export default Home;
