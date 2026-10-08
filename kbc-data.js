// Mock catalog for Kosher Beer Co. Replace with API data later; shape is documented in mapBeer().
// All kosher status values are ILLUSTRATIVE and UNVERIFIED.
(function () {
  const IMG = 'https://images.unsplash.com/photo-';
  const LIGHT = ['1608270586620-248524c67de9','1535958636474-b021ee887b13','1566633806327-68e152aaf26d','1571613316887-6f8d5cbf7ef7','1600788886242-5c96aabe3757','1518099074172-2e47ee6cfdc0','1586993451228-09818021e309','1584225065152-4a1454aa3d4e','1555658636-6e4a36218be7','1546622891-02c72c1537b6','1575367439058-6096bb9cf5e2','1558642891-54be180ea339','1536638317175-32449deccfc0','1436076863939-06870fe779c2'];
  const DARK = ['1504502350688-00f5d59bbdeb','1618183479302-1e0aa382c36b','1523567830207-96731740fa71'];
  const GROUP = ['1584225064785-c62a8b43d148','1612528443702-f6741f70a049','1559818454-1b46997bfe30','1584225064536-d0fbc0a10f18','1620219365994-f443a86ea626'];
  const img = (id, w) => IMG + id + '?w=' + (w || 600) + '&q=70&auto=format&fit=crop';

  const BREWERIES = [
    ['Sierra Nevada', 'California, USA'],
    ['Harbor Line Brewing', 'New York, USA'],
    ['Cedar Ridge Ales', 'Colorado, USA'],
    ['Tall Oak Brewing', 'Ontario, Canada'],
    ['Old Port Malthouse', 'Maine, USA'],
    ['Galilee Hills Brewery', 'Galilee, Israel'],
    ['Negev Fields', 'Negev, Israel'],
    ['Bayside Brewing Co.', 'California, USA'],
    ['Northgate Brewery', 'Michigan, USA'],
    ['Kesher Craft', 'New Jersey, USA'],
    ['Juniper Street Brewers', 'Pennsylvania, USA'],
    ['Abbey Road Ales', 'Flanders, Belgium'],
    ['Bavaria Brauhaus', 'Bavaria, Germany'],
    ['Jerusalem Stone Brewing', 'Jerusalem, Israel'],
  ];

  // name, brewery, style, abv, ibu, flavors, price, rating, reviews, avail(0 in/1 low/2 out), seasonal(0/1), kosher(0 certified/1 approved list/2 under review)
  const ROWS = [
    ['Pale Ale', 0, 'Pale Ale', 5.6, 38, 'Citrus,Floral,Hoppy', 3.49, 4.4, 2140, 0, 0, 0],
    ['Torpedo Extra IPA', 0, 'IPA', 7.2, 65, 'Citrus,Hoppy,Floral', 3.99, 4.3, 1588, 0, 0, 0],
    ['Hazy Little Thing', 0, 'IPA', 6.7, 40, 'Tropical,Fruity,Smooth', 3.99, 4.2, 1302, 0, 0, 1],
    ['Celebration Fresh Hop', 0, 'IPA', 6.8, 65, 'Hoppy,Citrus,Malty', 4.29, 4.5, 960, 1, 1, 0],
    ['Harbor Pilsner', 1, 'Pilsner', 4.9, 32, 'Crisp,Floral', 2.99, 4.0, 780, 0, 0, 0],
    ['Ferry Line IPA', 1, 'IPA', 6.5, 58, 'Citrus,Tropical,Hoppy', 3.79, 4.2, 845, 0, 0, 0],
    ['Night Shift Stout', 1, 'Stout', 6.2, 35, 'Roasty,Coffee,Chocolate', 4.19, 4.3, 512, 0, 0, 0],
    ['Brownstone Ale', 1, 'Brown Ale', 5.3, 24, 'Malty,Smooth,Chocolate', 3.29, 3.9, 301, 0, 0, 2],
    ['Summit Double', 2, 'Double IPA', 8.6, 88, 'Hoppy,Citrus,Tropical', 4.99, 4.5, 690, 1, 0, 0],
    ['Front Range Lager', 2, 'Lager', 4.6, 18, 'Crisp,Smooth', 2.79, 3.8, 1104, 0, 0, 0],
    ['Aspen Amber', 2, 'Amber Ale', 5.5, 30, 'Malty,Smooth', 3.19, 3.9, 420, 0, 0, 1],
    ['Timberline Porter', 2, 'Porter', 6.0, 33, 'Roasty,Chocolate,Malty', 3.79, 4.1, 377, 0, 1, 0],
    ['Maple Leaf Lager', 3, 'Lager', 5.0, 20, 'Crisp,Malty', 2.69, 3.7, 980, 0, 0, 0],
    ['Northern Wheat', 3, 'Wheat Beer', 5.2, 14, 'Fruity,Smooth,Citrus', 3.09, 4.0, 455, 0, 0, 0],
    ['Tall Oak Pale', 3, 'Pale Ale', 5.4, 36, 'Citrus,Hoppy', 3.29, 3.9, 390, 0, 0, 1],
    ['Lakehouse Sour', 3, 'Sour', 4.4, 8, 'Fruity,Tropical,Crisp', 4.49, 4.1, 266, 1, 1, 2],
    ['Lighthouse Lager', 4, 'Lager', 4.8, 22, 'Crisp,Smooth', 2.89, 3.9, 640, 0, 0, 0],
    ['Casco Bay IPA', 4, 'IPA', 6.4, 55, 'Citrus,Floral,Hoppy', 3.69, 4.1, 512, 0, 0, 0],
    ['Old Port Porter', 4, 'Porter', 5.8, 30, 'Roasty,Coffee,Smooth', 3.69, 4.0, 288, 0, 0, 0],
    ['Winter Harbor Stout', 4, 'Stout', 8.0, 45, 'Chocolate,Coffee,Roasty', 4.99, 4.4, 344, 1, 1, 0],
    ['Galilee Blonde', 5, 'Belgian Ale', 6.0, 20, 'Fruity,Floral,Smooth', 4.29, 4.0, 410, 0, 0, 0],
    ['Hermon Wheat', 5, 'Wheat Beer', 5.0, 12, 'Citrus,Fruity,Crisp', 3.89, 4.1, 365, 0, 0, 0],
    ['Kinneret Pale Ale', 5, 'Pale Ale', 5.2, 34, 'Citrus,Floral', 3.99, 4.0, 298, 0, 0, 1],
    ['Golan Dark', 5, 'Stout', 6.5, 38, 'Roasty,Chocolate,Malty', 4.49, 4.2, 220, 0, 0, 0],
    ['Desert Lager', 6, 'Lager', 4.7, 16, 'Crisp,Smooth', 3.29, 3.8, 510, 0, 0, 0],
    ['Date Honey Ale', 6, 'Other', 6.4, 18, 'Malty,Fruity,Smooth', 4.59, 4.1, 189, 1, 1, 2],
    ['Negev Amber', 6, 'Amber Ale', 5.6, 28, 'Malty,Smooth', 3.79, 3.9, 240, 0, 0, 0],
    ['Ramon IPA', 6, 'IPA', 6.6, 60, 'Citrus,Tropical,Hoppy', 4.29, 4.2, 276, 2, 0, 1],
    ['Coastline Hazy', 7, 'IPA', 6.9, 35, 'Tropical,Fruity,Smooth', 4.19, 4.4, 802, 0, 0, 0],
    ['Pier 7 Pilsner', 7, 'Pilsner', 5.0, 34, 'Crisp,Floral,Hoppy', 3.09, 4.1, 520, 0, 0, 0],
    ['Golden Gate Double', 7, 'Double IPA', 9.0, 95, 'Hoppy,Tropical,Citrus', 5.29, 4.5, 612, 1, 0, 0],
    ['Driftwood Brown', 7, 'Brown Ale', 5.6, 26, 'Malty,Chocolate,Smooth', 3.49, 3.8, 199, 0, 0, 2],
    ['Great Lakes Lager', 8, 'Lager', 4.5, 19, 'Crisp,Malty', 2.79, 3.7, 860, 0, 0, 0],
    ['Northgate Oatmeal Stout', 8, 'Stout', 5.9, 30, 'Smooth,Chocolate,Roasty', 3.99, 4.3, 430, 0, 0, 0],
    ['Cherry Orchard Sour', 8, 'Sour', 5.1, 10, 'Fruity,Crisp', 4.79, 4.2, 310, 0, 1, 1],
    ['Two Lights Pale', 8, 'Pale Ale', 5.3, 40, 'Citrus,Hoppy,Floral', 3.39, 4.0, 344, 0, 0, 0],
    ['Kesher Classic Lager', 9, 'Lager', 4.8, 20, 'Crisp,Smooth', 2.99, 4.0, 1210, 0, 0, 0],
    ['Kesher IPA', 9, 'IPA', 6.3, 62, 'Citrus,Hoppy,Floral', 3.89, 4.2, 980, 0, 0, 0],
    ['Havdalah Porter', 9, 'Porter', 6.2, 32, 'Roasty,Chocolate,Coffee', 4.09, 4.3, 520, 0, 0, 0],
    ['Kiddush Wheat', 9, 'Wheat Beer', 4.9, 13, 'Citrus,Fruity,Smooth', 3.49, 4.1, 610, 0, 0, 0],
    ['Kesher Double IPA', 9, 'Double IPA', 8.2, 82, 'Hoppy,Tropical,Citrus', 4.89, 4.4, 455, 1, 0, 0],
    ['Juniper Pilsner', 10, 'Pilsner', 5.1, 36, 'Crisp,Floral,Hoppy', 3.19, 4.1, 377, 0, 0, 0],
    ['Rowhouse Amber', 10, 'Amber Ale', 5.4, 26, 'Malty,Smooth', 3.29, 3.8, 260, 0, 0, 1],
    ['Schuylkill Session IPA', 10, 'IPA', 4.6, 45, 'Citrus,Floral,Crisp', 3.49, 3.9, 345, 0, 0, 0],
    ['Juniper Coffee Porter', 10, 'Porter', 6.4, 34, 'Coffee,Roasty,Chocolate', 4.19, 4.2, 230, 0, 1, 2],
    ['Abbey Dubbel', 11, 'Belgian Ale', 7.0, 22, 'Malty,Fruity,Chocolate', 5.49, 4.4, 520, 0, 0, 0],
    ['Abbey Tripel', 11, 'Belgian Ale', 8.5, 30, 'Fruity,Floral,Crisp', 5.79, 4.5, 610, 0, 0, 0],
    ['Flanders Red', 11, 'Sour', 6.0, 12, 'Fruity,Malty', 6.29, 4.3, 288, 1, 0, 1],
    ['Witbier Blanche', 11, 'Wheat Beer', 4.9, 14, 'Citrus,Floral,Smooth', 4.49, 4.1, 402, 0, 0, 0],
    ['Hefeweizen', 12, 'Wheat Beer', 5.4, 12, 'Fruity,Smooth', 3.99, 4.4, 1490, 0, 0, 0],
    ['Munich Helles', 12, 'Lager', 4.9, 18, 'Crisp,Malty,Smooth', 3.59, 4.3, 1102, 0, 0, 0],
    ['Märzen Festbier', 12, 'Lager', 5.8, 24, 'Malty,Smooth', 3.89, 4.2, 720, 1, 1, 0],
    ['Dunkel', 12, 'Other', 5.2, 22, 'Malty,Chocolate,Smooth', 3.79, 4.1, 488, 0, 0, 0],
    ['Bavarian Pilsner', 12, 'Pilsner', 5.0, 30, 'Crisp,Floral', 3.49, 4.2, 655, 0, 0, 0],
    ['Old City Pale Ale', 13, 'Pale Ale', 5.5, 35, 'Citrus,Floral,Hoppy', 4.19, 4.1, 310, 0, 0, 0],
    ['Jerusalem Stout', 13, 'Stout', 6.8, 40, 'Coffee,Roasty,Chocolate', 4.69, 4.3, 254, 0, 0, 0],
    ['Shuk Session Ale', 13, 'Other', 4.2, 22, 'Fruity,Crisp,Citrus', 3.79, 3.9, 198, 0, 0, 2],
    ['Zion Gate Double IPA', 13, 'Double IPA', 8.0, 78, 'Hoppy,Citrus,Tropical', 5.19, 4.3, 211, 2, 0, 1],
    ['Harvest Pumpkin Ale', 2, 'Amber Ale', 6.1, 20, 'Malty,Smooth', 3.99, 3.7, 302, 0, 1, 0],
    ['Ridgeline Brown', 2, 'Brown Ale', 5.7, 28, 'Malty,Chocolate,Roasty', 3.49, 3.9, 210, 0, 0, 0],
    ['Tropic Thunder Sour', 7, 'Sour', 4.8, 9, 'Tropical,Fruity,Crisp', 4.69, 4.2, 344, 0, 1, 0],
    ['Hop Harvest Pale', 1, 'Pale Ale', 5.8, 42, 'Hoppy,Citrus,Tropical', 3.59, 4.1, 288, 0, 1, 0],
  ];

  const STYLE_TEXT = {
    'IPA': 'A hop-forward India Pale Ale with a firm, clean bitterness.',
    'Double IPA': 'A big, resinous Double IPA built on a sturdy malt backbone.',
    'Pale Ale': 'A balanced, sessionable pale ale with a bright hop aroma.',
    'Lager': 'A clean, cold-conditioned lager that finishes dry and refreshing.',
    'Pilsner': 'A crisp, golden pilsner with a lightly spicy hop finish.',
    'Stout': 'A full-bodied stout poured near-black with a dense tan head.',
    'Porter': 'A dark, approachable porter with a smooth, medium body.',
    'Wheat Beer': 'A hazy, soft wheat beer with a light, creamy mouthfeel.',
    'Amber Ale': 'An amber ale with caramel malt character and gentle hops.',
    'Brown Ale': 'A mellow brown ale with nutty, toasted malt flavor.',
    'Sour': 'A tart, refreshing sour with a bright, clean acidity.',
    'Belgian Ale': 'A Belgian-style ale with expressive yeast character.',
    'Other': 'A specialty beer that sits outside the usual style lines.',
  };
  const KOSHER = ['Certified (illustrative)', 'Approved list (illustrative)', 'Under review (illustrative)'];
  const KOSHER_NOTE = [
    'This sample record lists the beer as carrying a kosher certification. Agency and details are placeholders and have not been verified.',
    'This sample record lists the beer on an approved-without-certification list. This is placeholder data and has not been verified.',
    'This sample record marks the beer as under review. This is placeholder data and has not been verified.',
  ];
  const AVAIL = ['In stock', 'Low stock', 'Out of stock'];
  const DARK_STYLES = ['Stout', 'Porter', 'Brown Ale'];
  const POS = ['50% 50%', '50% 35%', '50% 65%', '40% 50%'];
  let li = 0, di = 0;

  const beers = ROWS.map((r, i) => {
    const [name, bi, style, abv, ibu, flav, price, rating, reviews, av, seas, ko] = r;
    const dark = DARK_STYLES.includes(style);
    const pid = dark ? DARK[di++ % DARK.length] : LIGHT[li++ % LIGHT.length];
    const flavors = flav.split(',');
    return {
      id: 'b' + (i + 1),
      name, brewery: BREWERIES[bi][0], region: BREWERIES[bi][1],
      country: BREWERIES[bi][1].split(', ').pop(),
      style, abv, ibu, flavors, price, rating, reviews,
      availability: AVAIL[av], inStock: av !== 2,
      seasonal: seas ? 'Seasonal' : 'Year-round',
      kosher: KOSHER[ko], kosherNote: KOSHER_NOTE[ko],
      description: STYLE_TEXT[style] + ' Expect ' + flavors.map(f => f.toLowerCase()).join(', ').replace(/, ([^,]*)$/, ' and $1') + ' notes, at ' + abv + '% ABV and ' + ibu + ' IBU.',
      image: img(pid, 600), imageLg: img(pid, 1200), imagePos: POS[Math.floor(i / 7) % POS.length],
      keywords: [style, ...flavors, abv < 5 ? 'light session' : abv >= 7 ? 'strong' : '', ibu < 25 ? 'mild' : ibu > 55 ? 'bitter hoppy' : 'balanced', style.includes('IPA') ? 'ipa india pale ale' : ''].join(' ').toLowerCase(),
    };
  });

  const byName = n => beers.find(b => b.name === n).id;
  const PACKAGES = [
    { id: 'classic', name: 'The Shabbos Classic', desc: 'Familiar, easy-drinking beers that suit any table.', for: 'For a relaxed Friday night dinner', items: ['Kesher Classic Lager', 'Harbor Pilsner', 'Munich Helles', 'Hefeweizen', 'Lighthouse Lager', 'Kiddush Wheat'].map(byName), price: 18.99, photos: [LIGHT[0], LIGHT[4], LIGHT[10]] },
    { id: 'ipa', name: "The IPA Lover's Box", desc: 'Six hop-forward beers, from bright and citrusy to big and resinous.', for: 'For guests who like it hoppy', items: ['Torpedo Extra IPA', 'Kesher IPA', 'Ferry Line IPA', 'Coastline Hazy', 'Summit Double', 'Casco Bay IPA'].map(byName), price: 22.99, photos: [LIGHT[1], LIGHT[7], LIGHT[13]] },
    { id: 'sampler', name: 'The Friday Night Sampler', desc: 'A balanced spread across eight styles, light to dark.', for: 'For a mixed crowd', items: ['Pale Ale', 'Bavarian Pilsner', 'Witbier Blanche', 'Aspen Amber', 'Havdalah Porter', 'Northgate Oatmeal Stout', 'Cherry Orchard Sour', 'Galilee Blonde'].map(byName), price: 28.99, photos: [GROUP[0], GROUP[2], GROUP[3]] },
    { id: 'explorer', name: 'The Craft Explorer', desc: 'Sours, Belgian ales and specialty brews for the curious.', for: 'For the adventurous drinker', items: ['Flanders Red', 'Date Honey Ale', 'Tropic Thunder Sour', 'Abbey Dubbel', 'Juniper Coffee Porter', 'Lakehouse Sour'].map(byName), price: 27.49, photos: [GROUP[1], DARK[0], LIGHT[11]] },
    { id: 'premium', name: 'The Premium Shabbos Collection', desc: 'Our highest-rated bottles, chosen for hosting or gifting.', for: 'For hosting or gifting', items: ['Abbey Tripel', 'Celebration Fresh Hop', 'Golden Gate Double', 'Winter Harbor Stout', 'Abbey Dubbel', 'Hefeweizen', 'Märzen Festbier', 'Jerusalem Stout'].map(byName), price: 39.99, photos: [GROUP[4], DARK[1], LIGHT[5]] },
  ].map(p => ({ ...p, photos: p.photos.map(id => img(id, 500)) }));

  window.KBC_DATA = {
    beers, packages: PACKAGES,
    styles: ['IPA', 'Double IPA', 'Pale Ale', 'Lager', 'Pilsner', 'Stout', 'Porter', 'Wheat Beer', 'Amber Ale', 'Brown Ale', 'Sour', 'Belgian Ale', 'Other'],
    flavors: ['Citrus', 'Tropical', 'Floral', 'Malty', 'Roasty', 'Chocolate', 'Coffee', 'Fruity', 'Crisp', 'Hoppy', 'Smooth'],
    breweries: BREWERIES.map(b => b[0]),
    countries: [...new Set(BREWERIES.map(b => b[1].split(', ').pop()))],
    kosher: KOSHER,
    fallbackImage: img(LIGHT[0], 600),
    heroImage: img('1571767454098-246b94fbcf70', 1600),
    breweryImage: img('1559526642-c3f001ea68ee', 1600),
    sampleProfile: { styles: ['IPA', 'Pale Ale'], flavors: ['Citrus', 'Tropical'], ibu: 'balanced', abv: 'medium', sample: true },
  };
})();
