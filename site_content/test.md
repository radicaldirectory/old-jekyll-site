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

