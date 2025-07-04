// Smooth scroll
$('.dba-nav a').on('click', function(e) {
    if (this.hash !== '') {
      e.preventDefault();
      const hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800);
    }
  });

  const dbaSkills = [
    "HTML, CSS, jQuery",
    "Figma Layouts & Prototypes",
    "WordPress, Shopify, HubSpot",
    "UX, SEO, Branding",
    "ClickUp, Trello, Jira"
  ];

  const dbaProjects = [
    {
      title: "Client Website",
      description: "Built with WordPress and custom UI components.",
      image: "https://via.placeholder.com/300x200",
      platform: "WordPress"
    },
    {
      title: "Shopify App",
      description: "Complete redesign for better UX and conversions.",
      image: "https://via.placeholder.com/300x200",
      platform: "Shopify"
    },
    {
      title: "Personal Portfolio",
      description: "A fully custom-coded website showcasing my skills.",
      image: "https://via.placeholder.com/300x200",
      platform: "HTML/CSS/JS"
    }
  ];

  const dbaTestimonials = [
    {
      quote: "One of the best designers I’ve worked with — quick, creative, and always ready to improve.",
      client: "– Client, Shopify Store"
    },
    {
      quote: "Turned our basic concept into a beautiful, branded website in record time.",
      client: "– WordPress Client"
    }
  ];

  const dbaContactFields = [
    { type: "text", placeholder: "Your Name", required: true },
    { type: "email", placeholder: "Your Email", required: true },
    { type: "textarea", placeholder: "Tell me about your project..." },
    { type: "submit", text: "Send Message" }
  ];

  function renderProjects(filter = '') {
    $('#dba-project-list').empty();
    dbaProjects
      .filter(project =>
        project.title.toLowerCase().includes(filter.toLowerCase()) ||
        project.platform.toLowerCase().includes(filter.toLowerCase())
      )
      .forEach(project => {
        const card = `
          <div class="dba-card">
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <small>Platform: ${project.platform}</small>
          </div>
        `;
        $('#dba-project-list').append(card);
      });
  }

  $(document).ready(function () {
    dbaSkills.forEach(skill => {
      $('#dba-skill-list').append(`<li>${skill}</li>`);
    });

    renderProjects();

    $('#dba-search-input').on('input', function () {
      renderProjects(this.value);
    });

    dbaTestimonials.forEach(testimonial => {
      const block = `
        <blockquote>
          <p>“${testimonial.quote}”</p>
          <cite>${testimonial.client}</cite>
        </blockquote>
      `;
      $('#dba-testimonial-list').append(block);
    });

    dbaContactFields.forEach(field => {
      let input;
      if (field.type === "textarea") {
        input = `<textarea placeholder="${field.placeholder}"></textarea>`;
      } else if (field.type === "submit") {
        input = `<button type="submit">${field.text}</button>`;
      } else {
        input = `<input type="${field.type}" placeholder="${field.placeholder}" ${field.required ? 'required' : ''} />`;
      }
      $('#dba-contact-form').append(input);
    });
  });