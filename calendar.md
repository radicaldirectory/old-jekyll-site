---
layout: page
title: Event Calendar
permalink: /calendar/
---


<div id="calendar"></div>


{% for event in site.events %}
  <h2>{{ event.title }} - {{ event.event_date }}</h2>
  <p>{{ event.content | markdownify }}</p>
{% endfor %}
