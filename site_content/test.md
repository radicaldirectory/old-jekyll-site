---
layout: page
title: test
permalink: /test/
---
hello

{% assign sorted_groups = site.groups| sort:'title' %}
{% for group in sorted_groups %}
   <p><a href="{{group.url}}">{{group.url}}</a></p>
{% endfor %}

<div class="mb4">
    <a class="f5 br-pill dark-green no-underline ba grow pv2 ph3 dib mr3 bg-animate hover-bg-dark-green hover-white" href="#">
      First Nations
    </a>
    <a class="f5 br-pill dark-green no-underline ba grow pv2 ph3 dib mr3 bg-animate hover-bg-dark-green hover-white" href="#">
      Environment
    </a>
    <a class="f5 br-pill dark-green no-underline ba grow pv2 ph3 dib mr3 bg-animate hover-bg-dark-green hover-white" href="#">
      Workers
    </a>
    <a class="f5 br-pill dark-green no-underline ba grow pv2 ph3 dib mr3 bg-animate hover-bg-dark-green hover-white" href="#">
      Migrants
    </a>
    <a class="f5 br-pill dark-green no-underline ba grow pv2 ph3 dib mr3 bg-animate hover-bg-dark-green hover-white" href="#">
      Legal
    </a>
    <a class="f5 br-pill dark-green no-underline ba grow pv2 ph3 dib mr3 bg-animate hover-bg-dark-green hover-white" href="#">
      Disability
    </a>
    <a class="f5 br-pill dark-green no-underline ba grow pv2 ph3 dib mr3 bg-animate hover-bg-dark-green hover-white" href="#">
      Queer
    </a>
    <a class="f5 br-pill dark-green no-underline ba grow pv2 ph3 dib mr3 bg-animate hover-bg-dark-green hover-white" href="#">
      Abolition
    </a>
</div>
