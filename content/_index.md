---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

# https://bootstrap.hugoblox.com/blocks/experience/
sections:
  - block: about.biography
    id: about
    content:
      title: Biography
      username: admin
  - file: experience.md
  - block: item-groups
    content:
      title: Technical Skills
      groups:
        - items: ["Java", "Spring Boot", "Go", "C++", "Python"]
        - items: ["Kubernetes", "Docker", "AWS", "Spark"]
        - items: ["gRpc", "HAProxy", "Prometheus", "Grafana"]
        - items: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB"]
  - file: research.md
  - block: portfolio
    id: projects
    content:
      title: Projects
      filters:
        folders:
          - project
      default_button_index: 0
      buttons:
        - name: All
          tag: '*'
        - name: Kubernetes
          tag: Kubernetes
        - name: Code Analysis
          tag: CodeAnalysis
        - name: Java
          tag: Java
        - name: Android
          tag: Android
    design:
      columns: '2'
      view: masonry
  - file: activities.md
  - block: collection
    id: publications
    content:
      title: Publications
      filters:
        folders:
          - publication
        # exclude_featured: true
    design:
      columns: '2'
      view: compact
  - block: contact
    id: contact
    content:
      title: Contact
      email: dipta670@gmail.com
      phone: +1 XXX XXX 9120
      address:
        street: ""
        city: Chandler
        region: Arizona
        postcode: '85225'
        country: United States
        country_code: US
      # Automatically link email and phone or display as text?
      autolink: false
    design:
      columns: '2'
---
