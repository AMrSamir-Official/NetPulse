/* eslint-disable react/prop-types */
import { Button } from "@mui/material";

const TrendingNowSection = () => {
  return (
    <section className="bg-[#3a3c45] text-white py-16 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        {/* عنوان القسم */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold border-b-2 border-gray-600 pb-2">
            Trending Now
          </h1>
        </div>

        {/* المحتوى */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {/* المهارات الرائجة */}
          <div className="bg-gradient-to-r from-[#6a6a6a] to-[#3a3c45] p-8 rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">
              ChatGPT is a top skill
            </h2>
            <Button
              href="/topic/chatgpt/"
              variant="contained"
              className="bg-[#3a3c45] hover:bg-[#52545e] text-white font-bold mb-6 py-2 px-6 text-lg rounded-full shadow-lg"
            >
              See ChatGPT courses
            </Button>
            <span className="block text-gray-400 text-lg mb-6">
              3,896,168 learners
            </span>
            <Button
              href="/featured-topics/"
              variant="outlined"
              className="mt-6 border-[#3a3c45] text-[#3a3c45] hover:bg-[#52545e] hover:text-white py-2 px-6 text-lg rounded-full"
            >
              Show all trending skills
            </Button>
          </div>

          {/* الأقسام */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 xl:col-span-1">
            <CategorySection
              title="Development"
              skills={[
                {
                  title: "Python",
                  href: "/topic/python/",
                  learners: "46,669,320",
                },
                {
                  title: "Web Development",
                  href: "/topic/web-development/",
                  learners: "13,797,265",
                },
                {
                  title: "Data Science",
                  href: "/topic/data-science/",
                  learners: "7,582,545",
                },
              ]}
            />
          </div>

          <div className="col-span-1 sm:col-span-2 lg:col-span-1 xl:col-span-1">
            <CategorySection
              title="Design"
              skills={[
                {
                  title: "Blender",
                  href: "/topic/blender/",
                  learners: "2,821,920",
                },
                {
                  title: "Graphic Design",
                  href: "/topic/graphic-design/",
                  learners: "4,417,192",
                },
                {
                  title: "User Experience (UX) Design",
                  href: "/topic/user-experience-design/",
                  learners: "2,029,737",
                },
              ]}
            />
          </div>

          <div className="col-span-1 sm:col-span-2 lg:col-span-1 xl:col-span-1">
            <CategorySection
              title="Business"
              skills={[
                {
                  title: "PMI Project Management Professional (PMP)",
                  href: "/topic/pmp/",
                  learners: "2,451,694",
                },
                {
                  title: "Microsoft Power BI",
                  href: "/topic/microsoft-power-bi/",
                  learners: "4,426,343",
                },
                {
                  title: "Project Management",
                  href: "/topic/project-management/",
                  learners: "3,803,100",
                },
              ]}
            />
          </div>

          {/* قسم جديد (Marketing) */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 xl:col-span-1">
            <CategorySection
              title="Marketing"
              skills={[
                {
                  title: "Digital Marketing",
                  href: "/topic/digital-marketing/",
                  learners: "5,123,412",
                },
                { title: "SEO", href: "/topic/seo/", learners: "3,234,567" },
                {
                  title: "Content Marketing",
                  href: "/topic/content-marketing/",
                  learners: "2,876,145",
                },
              ]}
            />
          </div>

          {/* قسم جديد (IT) */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 xl:col-span-1">
            <CategorySection
              title="IT"
              skills={[
                {
                  title: "Network Security",
                  href: "/topic/network-security/",
                  learners: "1,659,324",
                },
                {
                  title: "Cloud Computing",
                  href: "/topic/cloud-computing/",
                  learners: "2,312,876",
                },
                {
                  title: "Artificial Intelligence",
                  href: "/topic/artificial-intelligence/",
                  learners: "3,125,879",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// مكون فرعي للأقسام
const CategorySection = ({ title, skills }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-bold mb-4 border-b border-gray-600 pb-2">
      {title}
    </h3>
    {skills.map((skill, index) => (
      <SkillItem
        key={index}
        title={skill.title}
        href={skill.href}
        learners={skill.learners}
      />
    ))}
  </div>
);

// مكون فرعي للمهارات
const SkillItem = ({ title, href, learners }) => (
  <div className="flex items-center justify-between mb-4">
    <a
      href={href}
      className="text-blue-400 font-medium hover:underline flex items-center"
    >
      {title}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </a>
    <span className="text-sm text-gray-400">{learners} learners</span>
  </div>
);

export default TrendingNowSection;
