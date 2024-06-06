const articles = [
  {
    when: 'A long time ago',
    title: 'Hot Headlines',
    body: 'To learn as much as I could about the internet at the time, I created a headline aggregation site called hot headlines. There were many ups and downs. I learned a lot and still use these skills to this day'
  },
  {
    when: 'Feb 2006 - Feb 2014',
    title: 'Commonwealth Bank',
    body: `
        Yes, I worked in a bank for too long. My favourite role was digital producer for most of the digital marketing emails for the business.
        I was provided image assets which had to be resized for purpose and copy for placement and creation in Photoshop. I developed my own layouts and tested compatibility in all major email clients.
        `,
  },
  {
    when: 'Feb 2014 - Present',
    title: 'Whispli Co-Founder',
    body: `
        I started Whispli with 2 friends. I was the only technical person in the company at the time so I created the first version of the SAAS platform.
        The platform went through many iterations before a complete rebuild.
        We went through many rounds of penetration testing and picked up some pretty prestegious customers. The business was also able to achieve ISO-27001 certification.
        `
  },
  {
    when: 'Summer 2018',
    title: 'Y-Combinator',
    body: 'Whispli was accepted into Y-Combinator summer 2018. We all went over to California Silicon Valley for a few months. It was a great experience which I will never forget.'
  },
  {
    when: 'Feb 2019 - Present',
    title: 'Experience Digital',
    body: 'I work with many different businesses and technologies. There is a lot to know and challenges every day.'
  },
  {
    when: 'May 2024',
    image: 'images/all_the_ais_having_a_picnic.jpeg',
    title: 'Checking out the AIs',
    body: `I've been checking out the AIs. ChatGPT, meta.ai, Google Gemini, Microsoft Co-Pilot. I mean it's pretty cool tech but.... I mean it's nice to have another resource to draw from to do my job and I guess everyone feels that way. I don't think it will take over the world just yet though. I created this image with meta.ai for free. Check it out.`
  },
  {
    when: 'June 1, 2024',
    image: 'images/copilot.png',
    title: 'Chat bot integration',
    body: `Right now I'm working on integrating Microsoft CoPilot into a wordpress site. The customer wants the user experience to be similar to the Intercom chat pane. Microsoft CoPilot out of the box doesn't have this feature. So I get to develop one of those javascript snippets which manipulates the DOM to add all the required code. It's pretty fun.`
  }
]

function placeArticles() {
  const articlesSection = document.getElementById('articles')

  articles.forEach(article => {
    let newArticle = document.createElement("div");
    newArticle.innerHTML = styledArticle(article)
    articlesSection.prepend(newArticle)
  });
  console.log('placeArticles')
}

function styledArticle(article) {
  return `
    <div class="card mb-3">
      <div class="p-3 d-flex align-items-center">
        <div class="profile-pic small me-3"></div>
        <div>
            <div class="fw-bold">Richard Ross</div>
            <div class="small text-secondary">
                ${article.when}
            </div>
        </div>
      </div>
      ${article.image ? `<img src="${article.image}" class="card-img-top" alt="article image">` : ''}
      <div class="card-body">
        <h5 class="card-title">${article.title}</h5>
        <p class="card-text">${article.body}</p>
      </div>
    </div>
  `
}

placeArticles()