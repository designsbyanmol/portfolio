// Smooth scroll
$('.dba-nav a').on('click', function (e) {
  $('.dba-nav a').removeClass('active');
  $(this).addClass('active');
  if (this.hash !== '') {
    e.preventDefault();
    const hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800);
  }
});

const dbaSkills = [
  "HTML", "CSS", "jQuery",
  "Figma Layouts", "Figma Prototypes",
  "WordPress", "Shopify", "HubSpot",
  "UX", "SEO", "Branding",
  "ClickUp", "Trello", "Jira"
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

  // Color change effect

  $('#about p').each(function () {
    const $original = $(this);
    const text = $original.text().trim();
    const words = text.split(/\s+/);

    // Create overlay container
    const $overlay = $('<div class="overlay"></div>');
    $original.append($overlay);

    // Add each word as a span to the overlay
    $.each(words, function (i, word) {
      const $span = $('<span>').text(word + ' ');
      $overlay.append($span);

      setTimeout(() => {
        $span.css('opacity', 1);
      }, i * 200); // delay for each word
    });
  });

  // Fetch json

  $.getJSON('https://raw.githubusercontent.com/designsbyanmol/portfolio/main/icons.json', function (data) {
    const instaIcon = data.find(icon => icon.name === 'instagram');
    const linkedinIcon = data.find(icon => icon.name === 'linkedin');
    const gmailIcon = data.find(icon => icon.name === 'gmail');
    const menuIcon = data.find(icon => icon.name === 'menu');

    $('.dba_f-insta').html(instaIcon.svg);
    $('.dba_f-linkedin').html(linkedinIcon.svg);
    $('.dba_f-gmail').html(gmailIcon.svg);
    $('.dba-h_menu-icon').html(menuIcon.svg);
  });

  $(document).on('click', '.dba-h_menu-icon', function () {
    $('.dba-nav').toggleClass('active-nav');
  });
  $(document).on('click', '.dba-nav a', function () {
    $('.dba-nav').removeClass('active-nav');
  });
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.dba-nav, .dba-h_menu-icon').length) {
      $('.dba-nav').removeClass('active-nav');
    }
  });

});