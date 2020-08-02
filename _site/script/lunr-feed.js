// builds lunr
var index = lunr(function () {
  this.field('title')
  this.field('content', {boost: 10})
  this.field('category')
  this.field('tags')
  this.ref('id')
});



  index.add({
    title: "Abolition And Transformative Justice Centre",
    content: "Providing advocacy, casework and support to incarcerated people, their family and friends.\n",
    category: null,
    tags: ["prison abolition","abolition","transformative justice"],
    id: 0
  });
  

  index.add({
    title: "Groupymcgroup",
    content: "group group hello\n",
    category: null,
    tags: ["abolition","groups","grouperoo"],
    id: 1
  });
  

  index.add({
    title: "Asian Anticolonial Alliance",
    content: "Here is bio\n",
    category: null,
    tags: ["AAA"],
    id: 2
  });
  

  index.add({
    title: "Warriors Of The Aboriginal Resistance",
    content: "Here is bio\n",
    category: null,
    tags: ["WAR"],
    id: 3
  });
  

  index.add({
    title: "Union Of Aboriginal And Torres Strait Islander Students",
    content: "Here is bio\n",
    category: null,
    tags: ["UATSIS"],
    id: 4
  });
  

  index.add({
    title: "Shut Youth Prisons Mparntwe Naarm",
    content: "We are a local action group in Mparntwe (Alice Springs) working towards the abolishment of youth prisons in Australia. Twitter: @ShutYouthPrison\n",
    category: null,
    tags: ["abolition"],
    id: 5
  });
  

  index.add({
    title: "Sisters Inside",
    content: "Established in 1992, Sisters Inside is an independent community organisation based in Queensland, which advocates for the collective human rights of women and girls in prison, and their families, and provides services to address their individual needs.\n",
    category: null,
    tags: ["abolition","feminist"],
    id: 6
  });
  

  index.add({
    title: "Allies Decolonising",
    content: "Bio\n",
    category: null,
    tags: ["#solidarity #decolonisation"],
    id: 7
  });
  

  index.add({
    title: "Elder Support Network",
    content: "BIO\n",
    category: null,
    tags: ["#solidarity #decolonisation"],
    id: 8
  });
  

  index.add({
    title: "Undercurrent Victoria",
    content: "We’re a volunteer organisation focused on building healthy relationships and challenging violence, through educational workshops and community discussions.\n",
    category: null,
    tags: ["transformative justice"],
    id: 9
  });
  

  index.add({
    title: "Food Not Bombs",
    content: "Food Not Bombs is a worldwide movement that cooks and distributes vegan organic food to anyone and everyone, without restriction.\nThe Melbourne chapter of the organisation gathers leftover organic fruit and vegetables from Queen Victoria Market, gives some to worthy causes, then cooks up the rest and share it on the streets of Brunswick Street, Fitzroy, Coburg and Footscray.\nEverything is paid for by fundraising gigs, catering gigs, donations where people can afford them and even from the pockets of the volunteers themselves.\nBasically they’re a well wicked awesome group who do good for the streets of Melbourne and they need you’re hard earned dosh!\nVolunteers are always welcome .\n",
    category: null,
    tags: ["catering"],
    id: 10
  });
  

  index.add({
    title: "First Nations Workers Alliance",
    content: "Bio\n",
    category: null,
    tags: ["#union #FN"],
    id: 11
  });
  

  index.add({
    title: "Melbourne Activist Catering Collective",
    content: "Contact us to cater for your workshops, conferences, training weekends and fundraisers.\n",
    category: null,
    tags: ["catering"],
    id: 12
  });
  

  index.add({
    title: "Friends Of The Earth Melbourne",
    content: "Bio\n",
    category: null,
    tags: ["#environment"],
    id: 13
  });
  

  index.add({
    title: "Irl Infoshop",
    content: "IRL is a collectively run independent community space and info-shop in West Footscray.\n",
    category: null,
    tags: ["community space"],
    id: 14
  });
  

  index.add({
    title: "Goongerah Environment Centre",
    content: "Goongerah Environment Centre Office (GECO) is a grass roots community group based in the small town of Goongerah, East Gippsland. Goongerah is located 70 kms north east of the town of Orbost. Since 1993 we have campaigned for protection of East Gippsland’s forests.\n\nhttps://www.geco.org.au/\n",
    category: null,
    tags: ["#forest #environment"],
    id: 15
  });
  

  index.add({
    title: "Retail And Fast Food Workers Union Raffwu",
    content: "A member driven union for everyone working in Retail and Fast Food.\n",
    category: null,
    tags: ["union"],
    id: 16
  });
  

  index.add({
    title: "Wildlife Of The Central Highlands",
    content: "WOTCH is a volunteer-run grassroots organisation dedicated to protecting Victoria’s native forests through the use of citizen science, community engagement and advocacy.\n\nwotch.org.au\n",
    category: null,
    tags: ["#forest #environment"],
    id: 17
  });
  

  index.add({
    title: "Industrial Workers Of The World",
    content: "Education - Organisation - Emancipation - Live in harmony with the Earth\n",
    category: null,
    tags: ["union"],
    id: 18
  });
  

  index.add({
    title: "Australian Unemployed Workers Union Auwu",
    content: "The Australian Unemployed Workers’ Union (AUWU) is an Australian union representing unemployed, underemployed, and unwaged workers. For urgent AUWU media inquiries, please contact this address: jeremy.poxon@auwu.org.au\n",
    category: null,
    tags: ["union"],
    id: 19
  });
  

  index.add({
    title: "Grandmothers Against Removal",
    content: "Bio\n",
    category: null,
    tags: ["#FN #abolition #decolonisation"],
    id: 20
  });
  

  index.add({
    title: "Melbourne Activist Legal Support",
    content: "Melbourne Activist Legal Support (MALS) supports activists to defend their own civil and political rights. We monitor police, train activists, provide legal support and resource movements. We stand up for your civil &amp; political rights.\n",
    category: null,
    tags: ["legal"],
    id: 21
  });
  

  index.add({
    title: "Flemington And Kensington Community Legal Centre",
    content: "We have been an invaluable part of the inner west for over 35 years, providing free legal services to our community.\n",
    category: null,
    tags: ["legal"],
    id: 22
  });
  

  index.add({
    title: "Frontline Action On Coal",
    content: "Frontline Action on Coalis a diverse group of people committed to community led, non-violent direct action.\n\nfrontlineaction.org\n",
    category: null,
    tags: ["#environment #coal #directaction"],
    id: 23
  });
  

  index.add({
    title: "Fitzroy Legal Service",
    content: "Fitzroy Legal Service Inc is a merger of the Darebin Community Legal Centre and Fitzroy Legal Service We are one of the oldest community legal centres in Australia, opening in 1972.\n",
    category: null,
    tags: ["legal"],
    id: 24
  });
  

  index.add({
    title: "Darebin Community Legal Centre",
    content: "Darebin Community Legal Centre provides a range of legal assistance services for those who live, work or study in Darebin. Darebin CLC and Fitzroy Legal Service merged in February 2020.\n",
    category: null,
    tags: ["legal"],
    id: 25
  });
  

  index.add({
    title: "Whistleblowers Activists Communities Alliance Waca",
    content: "WACA is a grassroots alliance supporting communities to campaign to end war, defend human, environmental &amp; civil rights &amp; confront corporate corruption.\n",
    category: null,
    tags: ["human rights","direct action","anticapitalist","antimilitary"],
    id: 26
  });
  

  index.add({
    title: "Seed Youth Indigenous Network",
    content: "Seed is Australia’s first Indigenous youth climate network.\n\nseedmob.org.au\n",
    category: null,
    tags: ["#FN #environment #decolonisation #fracking"],
    id: 27
  });
  

  index.add({
    title: "Workers For Climate Action",
    content: "bio\n",
    category: null,
    tags: ["#climatechange #union"],
    id: 28
  });
  

  index.add({
    title: "Australian Student Environment Network",
    content: "Australian Student Environment Network connects student environment groups from around Australia committed to building grassroots movements for change. We actively work for environmental and social justice through transformational and empowering collective action on a range of critical ecological and social issues. We recognise that Aboriginal sovereignty was never ceded, and work in solidarity with Aboriginal struggles\n\nasen.org.au\n",
    category: null,
    tags: ["#environment #climatejustice #student"],
    id: 29
  });
  

  index.add({
    title: "Bogs Fens Marshes And Swamps Club",
    content: "A club for celebrating all different kinds of swamps\n",
    category: null,
    tags: ["enviro","bog"],
    id: 30
  });
  

  index.add({
    title: "Earthworker",
    content: "Earthworker Co-operative is a community-led initiative working to provide local, sustainable, wealth-creating jobs that will contribute to a healthy planet and a safe climate.\n\nearthworkercooperative.com.au\n",
    category: null,
    tags: ["#climatejustice #coop"],
    id: 31
  });
  

  index.add({
    title: "Friends Of Leadbeaters Possum",
    content: "Friends of the Leadbeater Possum(LBP) aim to engage in strategies for the conservation of LBP, monitor the status of LBP in the wild and captivity, monitor the State Government’s Recovery Program for LBP and educate the public on the conservation status and threatening processes impacting the survival of LBP.\n\nleadbeaters.org.au\n",
    category: null,
    tags: ["#environment #wildlife"],
    id: 32
  });
  

  index.add({
    title: "Latin American Solidarity Network",
    content: "In Australia, LASNET aims to raise awareness of the struggles of Latin American people and works to support these initiatives through local and national activism.\n\nWe also aim to bring the Latin American example as a way of providing hope to those of us struggling in Australia against greed and increasing authoritarianism.\n\nAlso, we are totally against capitalism and patriarchalism, we support all collective struggles that promote equality in the diversity of the world we are living, without discrimination and borders.\n\nlatinamericansolidaritynetwork.org\n",
    category: null,
    tags: ["#migrant #worker"],
    id: 33
  });
  

  index.add({
    title: "Free West Papua",
    content: "Bio\n",
    category: null,
    tags: ["#migrant #refugee"],
    id: 34
  });
  

  index.add({
    title: "Refugees Survivors And Ex Detainees",
    content: "RISE is managed, developed and run by people from Refugee and asylum seeker backgrounds. RISE is a tax-deductible organisation and your financial support will enable us to assist eX-detainees, Refugees and Asylum seekers in building their new lives in Australia.\n\nriserefugee.org\n",
    category: null,
    tags: ["#refugee"],
    id: 35
  });
  

  index.add({
    title: "Sanction Australia Rise Campaign",
    content: "Bio\n\nhttp://riserefugee.org/topic/sanction-australia/\n",
    category: null,
    tags: ["#refugee #solidarity"],
    id: 36
  });
  

  index.add({
    title: "Homeless Persons Union Victoria",
    content: "The Homeless Persons Union of Victoria seeks to build an effective and self-sustaining organisation whose goal is to ensure the human rights of the homeless and powerless are not ignored, but are taken seriously by government, service providers and society. It seeks to do this by bringing together those who have a lived experience of homelessness and those who are passionate about the rights of the homeless.\n\nhttps://hpuvic.wordpress.com/\n",
    category: null,
    tags: ["#housing #homelessness #squatting #union"],
    id: 37
  });
  

  index.add({
    title: "Housing Unicorns And Solidarity Kittens",
    content: "HUSK is a network for people that face gender based oppression, they use empty buildings and rentals to provide housing &amp; safer spaces.\n",
    category: null,
    tags: ["#housing #homelessness #LGBTIQA+ #squatting"],
    id: 38
  });
  

  index.add({
    title: "Anti Poverty Networks Sa Qld Vic",
    content: "Anti-Poverty Network SA is an alliance of people affected and concerned by poverty and unemployment, including job-seekers, low income workers, sole parents, age and disability pensioners, students, community and welfare workers, and others.\n\nantipovertynetworksa.org\n",
    category: null,
    tags: ["#poverty #welfare"],
    id: 39
  });
  

  index.add({
    title: "Dole Action Group",
    content: "The Dole Action Group are a collective of unemployed workers (and supporters) who will not take the government’s attacks on welfare claimants lying down. We are based in Melbourne, Australia.\n\nhttps://doleactiongroup.wordpress.com/\n",
    category: null,
    tags: ["#poverty #welfare"],
    id: 40
  });
  

  index.add({
    title: "Disabled And Neurodiverse Workers Alliance Dnwa",
    content: "We are a group of both employed and unemployed disabled and neurodiverse people looking to bridge the gap between the disability rights movement and trade unionism.\n\ndnwa.org.au\n",
    category: null,
    tags: ["#antiableism #union #worker"],
    id: 41
  });
  

  index.add({
    title: "Magical Teaspoon Coop",
    content: "Welcome to the best idea you’ve ever heard of\n",
    category: null,
    tags: ["art","union","food"],
    id: 42
  });
  


 
// builds reference data
var store = [{
  "title": "Abolition And Transformative Justice Centre",
  "link": "/groups/abolition-and-transformative-justice-centre/",
  "image": null,
  "category": null,
  "excerpt": "Providing advocacy, casework and support to incarcerated people, their family and friends.\n"
},{
  "title": "Groupymcgroup",
  "link": "/groups/groupymcgroup/",
  "image": null,
  "category": null,
  "excerpt": "group group hello\n"
},{
  "title": "Asian Anticolonial Alliance",
  "link": "/groups/asian-anticolonial-alliance/",
  "image": null,
  "category": null,
  "excerpt": "Here is bio\n"
},{
  "title": "Warriors Of The Aboriginal Resistance",
  "link": "/groups/warriors-of-the-aboriginal-resistance/",
  "image": null,
  "category": null,
  "excerpt": "Here is bio\n"
},{
  "title": "Union Of Aboriginal And Torres Strait Islander Students",
  "link": "/groups/union-of-aboriginal-and-torres-strait-islander-students/",
  "image": null,
  "category": null,
  "excerpt": "Here is bio\n"
},{
  "title": "Shut Youth Prisons Mparntwe Naarm",
  "link": "/groups/shut-youth-prisons-mparntwe-naarm/",
  "image": null,
  "category": null,
  "excerpt": "We are a local action group in Mparntwe (Alice Springs) working towards the abolishment of youth prisons in Australia. Twitter:..."
},{
  "title": "Sisters Inside",
  "link": "/groups/sisters-inside/",
  "image": null,
  "category": null,
  "excerpt": "Established in 1992, Sisters Inside is an independent community organisation based in Queensland, which advocates for the collective human rights..."
},{
  "title": "Allies Decolonising",
  "link": "/groups/allies-decolonising/",
  "image": null,
  "category": null,
  "excerpt": "Bio\n"
},{
  "title": "Elder Support Network",
  "link": "/groups/elder-support-network/",
  "image": null,
  "category": null,
  "excerpt": "BIO\n"
},{
  "title": "Undercurrent Victoria",
  "link": "/groups/undercurrent-victoria/",
  "image": null,
  "category": null,
  "excerpt": "We’re a volunteer organisation focused on building healthy relationships and challenging violence, through educational workshops and community discussions.\n"
},{
  "title": "Food Not Bombs",
  "link": "/groups/food-not-bombs/",
  "image": null,
  "category": null,
  "excerpt": "Food Not Bombs is a worldwide movement that cooks and distributes vegan organic food to anyone and everyone, without restriction...."
},{
  "title": "First Nations Workers Alliance",
  "link": "/groups/first-nations-workers-alliance/",
  "image": null,
  "category": null,
  "excerpt": "Bio\n"
},{
  "title": "Melbourne Activist Catering Collective",
  "link": "/groups/melbourne-activist-catering-collective/",
  "image": null,
  "category": null,
  "excerpt": "Contact us to cater for your workshops, conferences, training weekends and fundraisers.\n"
},{
  "title": "Friends Of The Earth Melbourne",
  "link": "/groups/friends-of-the-earth-melbourne/",
  "image": null,
  "category": null,
  "excerpt": "Bio\n"
},{
  "title": "Irl Infoshop",
  "link": "/groups/irl-infoshop/",
  "image": null,
  "category": null,
  "excerpt": "IRL is a collectively run independent community space and info-shop in West Footscray.\n"
},{
  "title": "Goongerah Environment Centre",
  "link": "/groups/goongerah-environment-centre/",
  "image": null,
  "category": null,
  "excerpt": "Goongerah Environment Centre Office (GECO) is a grass roots community group based in the small town of Goongerah, East Gippsland...."
},{
  "title": "Retail And Fast Food Workers Union Raffwu",
  "link": "/groups/retail-and-fast-food-workers-union-raffwu/",
  "image": null,
  "category": null,
  "excerpt": "A member driven union for everyone working in Retail and Fast Food.\n"
},{
  "title": "Wildlife Of The Central Highlands",
  "link": "/groups/wildlife-of-the-central-highlands/",
  "image": null,
  "category": null,
  "excerpt": "WOTCH is a volunteer-run grassroots organisation dedicated to protecting Victoria’s native forests through the use of citizen science, community engagement..."
},{
  "title": "Industrial Workers Of The World",
  "link": "/groups/industrial-workers-of-the-world/",
  "image": null,
  "category": null,
  "excerpt": "Education - Organisation - Emancipation - Live in harmony with the Earth\n"
},{
  "title": "Australian Unemployed Workers Union Auwu",
  "link": "/groups/australian-unemployed-workers-union-auwu/",
  "image": null,
  "category": null,
  "excerpt": "The Australian Unemployed Workers’ Union (AUWU) is an Australian union representing unemployed, underemployed, and unwaged workers. For urgent AUWU media..."
},{
  "title": "Grandmothers Against Removal",
  "link": "/groups/grandmothers-against-removal/",
  "image": null,
  "category": null,
  "excerpt": "Bio\n"
},{
  "title": "Melbourne Activist Legal Support",
  "link": "/groups/melbourne-activist-legal-support/",
  "image": null,
  "category": null,
  "excerpt": "Melbourne Activist Legal Support (MALS) supports activists to defend their own civil and political rights. We monitor police, train activists,..."
},{
  "title": "Flemington And Kensington Community Legal Centre",
  "link": "/groups/flemington-and-kensington-community-legal-centre/",
  "image": null,
  "category": null,
  "excerpt": "We have been an invaluable part of the inner west for over 35 years, providing free legal services to our..."
},{
  "title": "Frontline Action On Coal",
  "link": "/groups/frontline-action-on-coal/",
  "image": null,
  "category": null,
  "excerpt": "Frontline Action on Coalis a diverse group of people committed to community led, non-violent direct action.\n\nfrontlineaction.org\n"
},{
  "title": "Fitzroy Legal Service",
  "link": "/groups/fitzroy-legal-service/",
  "image": null,
  "category": null,
  "excerpt": "Fitzroy Legal Service Inc is a merger of the Darebin Community Legal Centre and Fitzroy Legal Service We are one..."
},{
  "title": "Darebin Community Legal Centre",
  "link": "/groups/darebin-community-legal-centre/",
  "image": null,
  "category": null,
  "excerpt": "Darebin Community Legal Centre provides a range of legal assistance services for those who live, work or study in Darebin...."
},{
  "title": "Whistleblowers Activists Communities Alliance Waca",
  "link": "/groups/whistleblowers-activists-communities-alliance-waca/",
  "image": null,
  "category": null,
  "excerpt": "WACA is a grassroots alliance supporting communities to campaign to end war, defend human, environmental &amp; civil rights &amp; confront..."
},{
  "title": "Seed Youth Indigenous Network",
  "link": "/groups/seed-youth-indigenous-network/",
  "image": null,
  "category": null,
  "excerpt": "Seed is Australia’s first Indigenous youth climate network.\n\nseedmob.org.au\n"
},{
  "title": "Workers For Climate Action",
  "link": "/groups/workers-for-climate-action/",
  "image": null,
  "category": null,
  "excerpt": "bio\n"
},{
  "title": "Australian Student Environment Network",
  "link": "/groups/australian-student-environment-network/",
  "image": null,
  "category": null,
  "excerpt": "Australian Student Environment Network connects student environment groups from around Australia committed to building grassroots movements for change. We actively..."
},{
  "title": "Bogs Fens Marshes And Swamps Club",
  "link": "/groups/bogs-fens-marshes-and-swamps-club/",
  "image": null,
  "category": null,
  "excerpt": "A club for celebrating all different kinds of swamps\n"
},{
  "title": "Earthworker",
  "link": "/groups/earthworker/",
  "image": null,
  "category": null,
  "excerpt": "Earthworker Co-operative is a community-led initiative working to provide local, sustainable, wealth-creating jobs that will contribute to a healthy planet..."
},{
  "title": "Friends Of Leadbeaters Possum",
  "link": "/groups/friends-of-leadbeaters-possum/",
  "image": null,
  "category": null,
  "excerpt": "Friends of the Leadbeater Possum(LBP) aim to engage in strategies for the conservation of LBP, monitor the status of LBP..."
},{
  "title": "Latin American Solidarity Network",
  "link": "/groups/latin-american-solidarity-network/",
  "image": null,
  "category": null,
  "excerpt": "In Australia, LASNET aims to raise awareness of the struggles of Latin American people and works to support these initiatives..."
},{
  "title": "Free West Papua",
  "link": "/groups/free-west-papua/",
  "image": null,
  "category": null,
  "excerpt": "Bio\n"
},{
  "title": "Refugees Survivors And Ex Detainees",
  "link": "/groups/refugees-survivors-and-ex-detainees/",
  "image": null,
  "category": null,
  "excerpt": "RISE is managed, developed and run by people from Refugee and asylum seeker backgrounds. RISE is a tax-deductible organisation and..."
},{
  "title": "Sanction Australia Rise Campaign",
  "link": "/groups/sanction-australia-rise-campaign/",
  "image": null,
  "category": null,
  "excerpt": "Bio\n\nhttp://riserefugee.org/topic/sanction-australia/\n"
},{
  "title": "Homeless Persons Union Victoria",
  "link": "/groups/homeless-persons-union-victoria/",
  "image": null,
  "category": null,
  "excerpt": "The Homeless Persons Union of Victoria seeks to build an effective and self-sustaining organisation whose goal is to ensure the..."
},{
  "title": "Housing Unicorns And Solidarity Kittens",
  "link": "/groups/housing-unicorns-and-solidarity-kittens/",
  "image": null,
  "category": null,
  "excerpt": "HUSK is a network for people that face gender based oppression, they use empty buildings and rentals to provide housing..."
},{
  "title": "Anti Poverty Networks Sa Qld Vic",
  "link": "/groups/anti-poverty-networks-sa-qld-vic/",
  "image": null,
  "category": null,
  "excerpt": "Anti-Poverty Network SA is an alliance of people affected and concerned by poverty and unemployment, including job-seekers, low income workers,..."
},{
  "title": "Dole Action Group",
  "link": "/groups/dole-action-group/",
  "image": null,
  "category": null,
  "excerpt": "The Dole Action Group are a collective of unemployed workers (and supporters) who will not take the government’s attacks on..."
},{
  "title": "Disabled And Neurodiverse Workers Alliance Dnwa",
  "link": "/groups/disabled-and-neurodiverse-workers-alliance-dnwa/",
  "image": null,
  "category": null,
  "excerpt": "We are a group of both employed and unemployed disabled and neurodiverse people looking to bridge the gap between the..."
},{
  "title": "Magical Teaspoon Coop",
  "link": "/groups/magical-teaspoon-coop/",
  "image": null,
  "category": null,
  "excerpt": "Welcome to the best idea you’ve ever heard of\n"
}]


// builds search
$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    // Get query
    var query = $(this).val();
    // Search for it
    var result = index.search(query);
    // Show results
    resultdiv.empty();
    // Add status
    resultdiv.prepend('<p class="">Found '+result.length+' result(s)</p>');
    // Loop through, match, and add results
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem = '<div class=""><div class=""><a href="'+store[ref].link+'" class="">'+store[ref].title+'</a><p>'+store[ref].excerpt+'</p></div>';
      resultdiv.append(searchitem);
    }
  });
});