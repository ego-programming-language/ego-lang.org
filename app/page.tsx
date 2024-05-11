import { EmailInput } from "@/components/root/EmailInput";
import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";
const jetbrains = JetBrains_Mono({ subsets: ["latin"] });
import { MongoClient, ServerApiVersion } from "mongodb";

const features = [
  {
    desc: "dynamic types",
  },
  {
    desc: "first class functions",
  },
  {
    desc: "no rare type coercion",
  },
  {
    desc: "simple by design",
  },
]
export default function Home() {
  // Server Action
  async function subscribeEmail(event: FormData) {
    'use server'

    let email = String(event.get('email'))
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if (!regex.test(email)) return false

    const uri = process.env.MONGO_URI;
    if (!uri) return false

    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

    async function save_email(email: string) {
      try {
        await client.connect() // Connect the client to the server (optional starting in v4.7)
        const db = client.db("db");
        const emails = db.collection("emails");
        const doc = { email, timezone: Intl.DateTimeFormat().resolvedOptions().timeZone };
        const result = await emails.insertOne(doc);
        console.log(
          `A document was inserted with the _id: ${result.insertedId}`,
        );
      } finally {
        await client.close();
      }
    }

    return await save_email(email)
      .then(() => { return true })
      .catch(() => { return false });
  }

  return (
    <main className="relative flex h-screen w-screen flex-col 
      items-center justify-start overflow-x-hidden">
      <header
        className={jetbrains.className + ` fixed h-fit w-fit flex flex-row justify-center items-center m-10 z-10 gap-4`}
      >
        <div
          className="h-fit w-fit flex px-10 py-3 bg-[#131313c8] rounded-lg border-solid border-[#2D2D2D]
          border-[1px] font-thin text-center"
        >🚧 actively building alpha-v0.1</div>
        <a
          href="https://github.com/noreplydev/ego"
          className="flex-row  h-fit w-fit bg-white rounded-lg outline outline-[0px] 
            outline-transparent md:hover:outline-[#2c2c2c] hover:outline-8 duration-150 ease-in-out
            hidden md:flex lg:flex xl:flex"
        >
          <div className="w-fit h-full grid place-items-center border-r-[1px] py-3 px-3.5
            border-solid border-[#ececec] ">
            <Image src="github.svg"
              height={18}
              width={18}
              alt="github icon"
            />
          </div>
          <div className="w-24 min-h-full flex flex-row justify-center items-center rounded-r-lg 
            gap-2 bg-[#e3e3e3] cursor-pointer">
            <Image src="star.svg"
              height={15}
              width={15}
              alt="github star"
            />
            <p className={jetbrains.className + ` font-light text-center text-[#898989]`}>star</p>
          </div>
        </a>
      </header>
      <div className="relative min-h-screen w-full flex flex-col justify-center items-center mb-20">
        <Image src="ego.svg"
          height={300}
          width={300}
          alt="Ego logo"
          style={{
            boxShadow: "0px 0px 100px 0px #0056ff",
            borderRadius: "63px",
          }}
          className="absolute bottom-[150px]"
        />
        {/* round line */}
        <div
          className="zoom absolute h-[340px] w-[360px] bg-transparent animate-on
            bottom-[120px] border-solid border-[#0056ff] border-2 rounded-[80px] opacity-0"
        ></div>
        <div
          className="absolute h-[420px] w-[440px] bg-transparent animate-on-1
            bottom-[80px] border-solid border-[#0056ff] border-2 rounded-[100px] opacity-0"
        ></div>
        <div
          className="absolute h-[490px] w-[530px] bg-transparent animate-on-2
            bottom-[50px] border-solid border-[#0056ff] border-2 rounded-[140px] opacity-0"
        ></div>
        <div
          className="absolute h-[560px] w-[620px] bg-transparent animate-on-3
            bottom-[20px] border-solid border-[#0056ff] border-2 rounded-[170px] opacity-0"
        ></div>
        <div
          className="absolute h-[630px] w-[700px] bg-transparent animate-on-4
            bottom-[-15px] border-solid border-[#0056ff] border-2 rounded-[190px] opacity-0"
        ></div>
        <h1 className="text-[300px] absolute bottom-[-80px]">ego</h1>
      </div>
      <p className="h-fit w-full px-5 md:w-2/4 lg:w-2/4 xl:w-2/4 text-5xl 
        text-center font-semibold mt-4 mb-28"
      >multipurpose programming language <br /> powered by <span className="text-[#FF7347] underline">rust</span></p>
      <div className="relative h-fit w-full px-5 md:w-2/4 lg:w-2/4 xl:w-2/4 mb-24">
        <p className="relative text-5xl text-center font-semibold mt-4 mb-9">Features</p>
        <div className="relative grid grid-cols-1 grid-rows-4 h-fit w-full gap-5 sm:grid-cols-1 sm:grid-rows-4 
          md:grid-cols-2 md:grid-rows-2">
          {
            features.map(feat => {
              return <div className="bg-[#13131381] h-36 w-full rounded-xl grid place-items-center duration-150 ease-in-out
                outline outline-[0px] outline-transparent md:hover:outline-[#1C1C1C] hover:outline-8 px-10">
                <p className="text-3xl text-center font-semibold my-4">{feat.desc}</p>
              </div>
            })
          }

        </div>
        <div
          style={{
            boxShadow: "0px 0px 100px 0px #FF7347",
          }}
          className="absolute flex top-[50%] left-[-70%] bg-[#FF7347] rounded-l-[100px] 
            rounded-br-[500px] -rotate-[-40deg] blur-2xl h-[400px] w-[400px] z-[-1]"
        />
      </div>
      <p className="relative text-5xl text-center font-semibold mt-4 mb-9"></p>
      <footer className="flex flex-col h-fit w-full justify-center items-center gap-3 mb-20 px-5">
        <p className="h-fit w-full px-5 md:w-2/4 lg:w-2/4 xl:w-2/4 text-2xl 
        text-center font-semibold "
        >Get notified about <span className="text-[#0056ff]">ego </span> releases</p>
        <p className={jetbrains.className + ` text-base font-light text-center text-[#898989]`}>We will only notify you about ego <br />new stable releases</p>
        <EmailInput font={jetbrains.className} subscribeEmail={subscribeEmail} />
      </footer>
    </main >
  );
} 
