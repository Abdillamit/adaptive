const jobs = [
  {
    title: "Front-End developer",
    company: "AndroMedia",
    featured: true,
    avatarUrl:
      "https://pinpku.umsida.ac.id/wp-content/uploads/2021/11/andromedia-150x150.png",
    conditions: ["1d ago", "full Time", "Remote"],
    tags: ["HTML", "CSS", "JS", "REACT"],
  },

  {
    title: "Front-End developer",
    company: "MadDevs",
    featured: true,
    avatarUrl:
      "https://yt3.ggpht.com/a/AGF-l7_0hk3mv6ab2wsBCKlLKCfnvWQhAoHlv9NSmw=s900-c-k-c0xffffffff-no-rj-mo",
    conditions: ["1d ago", "full Time", "KG Only"],
    tags: ["HTML", "CSS", "JS", "Vue"],
  },
  {
    title: "Front-End developer",
    company: "MadDevs",
    featured: true,
    avatarUrl:
      "https://yt3.ggpht.com/a/AGF-l7_0hk3mv6ab2wsBCKlLKCfnvWQhAoHlv9NSmw=s900-c-k-c0xffffffff-no-rj-mo",
    conditions: ["1d ago", "full Time", "KG Only"],
    tags: ["Django", "Python", "NOdeJS", "MOngoDB"],
  },
];

const jobContent = document.querySelector(".job__content");

const renderJob = arr => {
  jobContent.innerHTML = "";

  arr.forEach(job => {
    jobContent.innerHTML += `
    <div class="job__item flex">
                    <div data-id="0" class="job__left flex">
                        <div class="job__avatar"><img class="img" src="${
                          job.avatarUrl
                        }">
                        </div>
                        <div class="data">
                            <div class="job__top flex">
                                <h2 class="job__company">
                                    ${job.company}
                                </h2>
                                ${
                                  job.featured
                                    ? '<div class="job__featured">FEATURED</div>'
                                    : ""
                                }
                            </div>
                            <div class="job__center">
                                <h2 class="job__title">
                                    ${job.title}
                                </h2>
                            </div>
                            <div class="job__bottom">
                                <ul class="job__details flex">
                                    ${job.conditions.map(
                                      condition => `
                                    <li class="job__detail">
                                        <a href="#" class="job__condition">
                                            ${condition}
                                        </a>
                                    </li>
                                    `
                                    )}
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="job__right">
                        <ul class="job__tags flex">
                        ${job.tags.map(
                          tag => `
                        <li class="job__tag">
                            <a href="#" class="job__link">
                                ${tag}
                            </a>
                        </li>
                        `
                        )}
                        </ul>
                    </div>
                </div>
    `;
  });

  const tags = jobContent.querySelectorAll(".job__tag");

  tags.forEach(tag => {
    tag.addEventListener("click", () => {
      const filteredJobs = jobs.filter(job => job.tags.includes(tag.innerText));

      renderJob(filteredJobs);
    });
  });

  const details = jobContent.querySelectorAll(".job__detail");

  details.forEach(detail => {
    detail.addEventListener("click", () => {
      const filteredJobs = jobs.filter(job =>
        job.conditions.includes(detail.innerText)
      );

      renderJob(filteredJobs);
    });
  });
};

renderJob(jobs);
