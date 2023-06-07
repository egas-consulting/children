var config = {
    style: 'mapbox://styles/ed1990/clia8096n00uy01qubqs38h82',
    accessToken: 'pk.eyJ1IjoiZWQxOTkwIiwiYSI6ImNsaTlkNm41aDQ0d3AzZW50bjY2YWI0N3AifQ.jUhXIR0aX5ZW4uT690N7SQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '<span style="font-family:sans-serif; padding: 0.5vh; border-radius: 10px; color:#926834; font-size:1.2rem" >Exploring Europe`s Young Generation</span>',
    subtitle: '<span style=" font-family: playfair display, serif; color:#926834; font-size:2.3rem" >How Would Your Child`s Life Story Unfold in a Different Country?',
    byline: '<a href="https://panorama.ro/author/edit/" target="_blank">Edit Gyenge</a> <p> <img src="./scroll.png"> </p> <p> scroll </p> <p><img src="./copii.png" </p>',
    footer: '<br> June 1, 2023 <br> <a href="https://panorama.ro/author/andrei-luca-popescu/" target="_blank">Editor: Andrei Luca Popescu</a> <br> Made with: <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling </a> <p>Ilustration: Microsoft Bing Image Creator</p>',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Not all children are fortunate enough to begin life on an equal footing. Even within the European Union`s borders, disparities in upbringing and development prevail. The extent to which a child`s journey is shaped by the EU country of their birth poses an urgent question: What opportunities await them as they embark on life`s unpredictable path, and which nation harbors the most unfavorable circumstances? ',
            location: {
                center: [12.02595, 49.90885],
                zoom: 2,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'slug-style-id5',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Within this interactive experience, Panorama embarks on a captivating investigation into a wide range of social indicators that hold significant sway over the crucial formative years of our youth. Uncovering an intriguing connection, we unveil a fascinating correlation between these indicators and beloved characters from the enchanting world of storybooks.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 2,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },



        
        {
            id: 'slug-style-id3',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'The birthplace of a child holds a pivotal role in shaping the trajectory of their life. It can determine whether they face a difficult start like the "Little Match Girl," struggling to survive without adequate resources. They might also encounter a life immersed in poverty like Oliver Twist. Some children find themselves in situations similar to that of Cinderella, growing up without parents and longing for a better life. On the other hand, there are those like Heidi, who are raised by caring grandparents.<img src="./foh.png" class="center">',
            location: {
                center: [12.02595, 49.90885],
                zoom: 2,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'slug-style-id4',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'They could be a child resembling the hero from Narnia, with educated parents. Alternatively, they might be an Alice in an educational wonderland, where they have the opportunity to receive an education that nurtures their skills and abilities properly. Lastly, they could be a Huck Finn, subjected to different forms of abuse. <img src="./nah.png" class="center">',
            location: {
                center: [12.02595, 49.90885],
                zoom: 2,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        
        {
            id: 'slug-style-id6',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'In the second part of this visual narrative, we delve into the formative years of their upbringing, guided by their parents. Each country places importance on different qualities and aspects deemed significant in life. Drawing from a comprehensive study called the World Values Survey, we embark on a journey among children from various representative countries in Europe, aiming to observe how their parents shape their cultural and social development, starting from an early age.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 2,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        



        {
            id: 'exp1',
            alignment: 'left',
            hidden: false,
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >The Little Match Girl </span> <p><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1rem" >By Hans Christian Andersen </p> <p> </span><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.4rem" >Theme: Death  </span> </p>',
            image: '',
            description: '<div style="width:400px; height:auto; padding:5px;"> <img src="./fetita.png"></div> The touching story, written by Hans Christian Andersen,  centers around a young, impoverished girl`s struggle to sell matches on a bitterly cold New Year`s Eve. She stands barefoot, adorned in worn-out attire, and without a place to call home. Desperate for warmth, she attempts to kindle a fire with the matches, but tragically succumbs to the cold before the break of dawn.',
            location: {
                center: [24.233145, 45.976924],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ind1',
            alignment: 'right',
            hidden: false,
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem"  >Indicator: Under-Five Child Mortality Rate </span> <p> <span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.2rem" >Highest mortality rates: Romania, Bulgaria, Malta </p>',
            image: '',
            description: 'This refers to the probability of a newborn perishing before reaching the age of 5, measured as per 1,000 live births. In 2021, an alarming 5 million children under the age of 5 tragically lost their lives across the globe. Within the European Union, an average of 3.7 children per 1,000 under the age of 5 succumb to various causes. Worldwide, infectious diseases such as pneumonia, diarrhea, and malaria continue to be the primary culprits behind deaths in children under 5, alongside premature birth and birth-related complications. Romania and Bulgaria`s children find themselves to be the "Little Match Girls" of the EU, as these countries bear the burden of the highest child mortality rates under the age of 5 within the EU.',
            location: {
                center: [24.233145, 45.976924],
                zoom: 6,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ind1.1',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe title="Under-five child mortality rates in the EU (estimated per 1000 children)" aria-label="Map" id="datawrapper-chart-JJP9Y" src="https://datawrapper.dwcdn.net/JJP9Y/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="710" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}(); </script>',
            location: {
                center: [24.233145, 45.976924],
                zoom: 7,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'exp2',
            alignment: 'left',
            hidden: false,
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >Cinderella </span> <p><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1rem" >By Brothers Grimm, Charles Perrault </p> <p> </span><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.4rem" >Theme: Orphans </span> </p>',
            image: '',
            description: '<div style="width:400px; height:auto; padding:5px;"> <img src="./cenusareasa.png"></div>Cinderella is a young orphan girl who lives with a cruel stepmother and stepsisters. Despite the hardships, she remains kind-hearted and full of hope. With the help of the Fairy Godmother, Cinderella attends a royal ball where she captures the heart of the prince.',
            location: {
                center: [33.177598, 35.103830],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ind2',
            alignment: 'right',
            hidden: false,
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >Indicator: Maternal Mortality Rate</span> <p> <span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.2rem" >Highest Maternal Mortality Rates: Cyprus, Latvia, Hungary </p>',
            image: '',
            description: 'It concerns mothers who die due to health complications during pregnancy or childbirth. Between 2000 and 2020, the global maternal mortality rate (MMR) decreased by 34% - from 342 deaths to 223 deaths per 100,000 live births, according to the estimates from the United Nations.',
            location: {
                center: [33.177598, 35.103830],
                zoom: 6,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ind2.1',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe title="Estimates of country-level maternal mortality ratio in the EU " aria-label="Map" id="datawrapper-chart-FDJmr" src="https://datawrapper.dwcdn.net/FDJmr/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="672" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}(); </script>',
            location: {
                center: [33.177598, 35.103830],
                zoom: 7,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'exp3',
            alignment: 'left',
            hidden: false,
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >Oliver Twist </span> <p><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1rem" >By Charles Dickens </p> <p> </span><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.4rem" >Theme: Poverty </span> </p>',
            image: '',
            description: '<div style="width:400px; height:auto; padding:5px;"> <img src="./oliver.png"></div>The classic novel by Charles Dickens follows the life of a young orphan who grows up in the harsh conditions of a nineteenth-century workhouse. After enduring abuse and hardships, Oliver escapes and finds himself exploited in the criminal underworld of London. ',
            location: {
                center: [24.233145, 45.976924],
                zoom: 4,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ind3',
            alignment: 'right',
            hidden: false,
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >Indicator: Rate of Severe Material Deprivation in Children under 18 Years Old</span> <p> <span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.2rem" >Children Facing the Most Severe Deprivation: Romania, Bulgaria, Greece </p>',
            image: '',
            description: 'Poverty is not just a generic term for those who lack money. It translates into highly concrete situations, as reflected in EU statistics. According to Eurostat, severe material deprivation occurs when at least 7 out of 13 deprivations exist in a child`s life.',
            location: {
                center: [24.233145, 45.976924],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ind3.1',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe title="The percentage of children under 18 years old experiencing severe material deprivation in the EU" aria-label="Map" id="datawrapper-chart-N1iGi" src="https://datawrapper.dwcdn.net/N1iGi/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="763" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();  </script>',
            location: {
                center: [24.233145, 45.976924],
                zoom: 6,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'exp4',
            alignment: 'left',
            hidden: false,
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >Heidi </span> <p><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1rem" >By Johanna Spyri </p> <p> </span><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.4rem" >Theme: Raised by Grandparents </span> </p>',
            image: '',
            description: '<div style="width:400px; height:auto; padding:5px;"> <img src="./heidi.png"></div>The story of Heidi is that of an orphan girl who lives with her withdrawn and stern grandfather in the Swiss Alps. Despite her initial reluctance, her warm-hearted nature and relationship with her grandfather flourish, and the grumpy old man becomes a loving and caring figure in her life.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ind4',
            alignment: 'right',
            hidden: false,
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >Indicator: Children Raised by Grandparents</span> <p> <span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.2rem" >Top states in which grandparents provide intensive care: Romania, Italy, Spain </p>',
            image: '',
            description: 'In Portugal, Spain, Italy, and Romania, where social assistance payments for parents and stay-at-home mothers are limited, and formal child care and part-time job opportunities for mothers are scarce, grandparents play a significant role in providing intensive care for their grandchildren. The data indicates a higher level of involvement from grandmothers. Grandparents also take care of children whose parents are working abroad or in other cities, as is often the case in Romania.',
            location: {
                center: [24.233145, 45.976924],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ind4.1',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe title="Percentage of grandmothers providing intensive care for grandchildren" aria-label="Map" id="datawrapper-chart-9PyRI" src="https://datawrapper.dwcdn.net/9PyRI/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="727" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}(); </script>',
            location: {
                center: [24.233145, 45.976924],
                zoom: 6,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'exp5',
            alignment: 'left',
            hidden: false,
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >Peter Pevensie </span> <p><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1rem" >By C. S. Lewis </p> <p> </span><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.4rem" >Theme: Educated Parents </span> </p>',
            image: '',
            description: '<div style="width:400px; height:auto; padding:5px;"> <img src="./narnia.png"></div>Peter and his siblings are transported to the magical land of Narnia. Professor Kirke and Mrs. Kirke are depicted as intelligent and supportive figures who guide them through their adventures and development.',
            location: {
                center: [5.289564, 52.121422],
                zoom: 4,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ind5',
            alignment: 'right',
            hidden: false,
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >Indicator: Parental Education</span> <p> <span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.2rem" >States Leading in Parental Education Levels: Denmark, Netherlands, Ireland </p>',
            image: '',
            description: 'Parental education refers to the percentage of children whose parents have more than a high school education.',
            location: {
                center: [5.289564, 52.121422],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ind5.1',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe title="The distribution of children whose parents have completed tertiary education (%) " aria-label="Map" id="datawrapper-chart-G9Kla" src="https://datawrapper.dwcdn.net/G9Kla/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="693" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}(); </script>',
            location: {
                center: [5.289564, 52.121422],
                zoom: 6,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },


        {
            id: 'exp6',
            alignment: 'left',
            hidden: false,
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >Alice </span> <p><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1rem" >By Lewis Carroll </p> <p> </span><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.4rem" >Theme: The Ability to Solve Complex Problems </span> </p>',
            image: '',
            description: '<div style="width:400px; height:auto; padding:5px;"> <img src="./alice.png"></div>Alice is an educated and intellectually curious girl. She constantly seeks knowledge and immerses herself in academic pursuits, serving as a role model for her peers and using her intelligence to solve complex problems.',
            location: {
                center: [24.838502, 59.323163],
                zoom: 4,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ind6',
            alignment: 'right',
            hidden: false,
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >Indicator: PISA scores</span> <p> <span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.2rem" >Highest PISA scores in 2018: Estonia, Finland, Poland </p>',
            image: '',
            description: 'In the 2018 PISA tests, children from Estonia, Finland, Poland, Ireland, and Slovenia demonstrated exceptional performance by surpassing the 500-point mark. Students in Romania achieved one of the lowest scores, with a score of 428 points.',
            location: {
                center: [24.838502, 59.323163],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ind6.1',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe title="PISA scores for EU countries" aria-label="Map" id="datawrapper-chart-7HYAX" src="https://datawrapper.dwcdn.net/7HYAX/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="647" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}(); </script>',
            location: {
                center: [24.838502, 59.323163],
                zoom: 6,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'exp7',
            alignment: 'left',
            hidden: false,
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >Huckleberry Finn </span> <p><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1rem" >By Mark Twain </p> <p> </span><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.4rem" >Theme: Child Abuse </span> </p>',
            image: '',
            description: '<div style="width:400px; height:auto; padding:5px;"> <img src="./huck.png"></div>Huck is a restless and independent boy from Missouri who lives under the care of Widow Douglas, a kind-hearted woman who tries to civilize him. One day, his abusive and alcoholic father returns to town and demands custody of Huck. Worried for his safety, the boy decides to stage his own death.',
            location: {
                center: [11.487853, 43.663277],
                zoom: 4,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ind7',
            alignment: 'right',
            hidden: false,
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >Indicator: Global Index Analyzing Child Exploitation and Abuse</span> <p> <span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.2rem" >States with the Lowest Child Protection Rankings against Abuse: Italy, Romania </p>',
            image: '',
            description: 'The Out of the Shadows Index is a global indicator that analyzes how countries address the exploitation and sexual abuse of children. The Index measures the safety or lack thereof in the environment where children live. Over 60 countries are taken into account. Within the European Union, Italy has the lowest score. ',
            location: {
                center: [11.487853, 43.663277],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ind7',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe title="Out of the Shadows Index" aria-label="Map" id="datawrapper-chart-ya3Me" src="https://datawrapper.dwcdn.net/ya3Me/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="751" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();</script>',
            location: {
                center: [11.487853, 43.663277],
                zoom: 6,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'exp8',
            alignment: 'center',
            hidden: false,
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >How Parents Shape Their Own Children</span> ',
            image: '',
            description: 'Children are greatly influenced by the environment in which they live and the opportunities or obstacles they encounter during their upbringing. Each country and region has specific characteristics that directly shape children`s perception and attitude towards life, as well as their behavior as adults. The importance of parents in shaping children`s self-image and transmitting values is crucial. We will explore how parents in various representative countries across major European regions relate to the qualities they instill in their children.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'exp8.1',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'In Scandinavia, for example, parents place great importance on gender equality, individual freedom, and the personal development of their children. On the other hand, in Central and Eastern European countries, traditional values and respect for authority hold a significant place in children`s education. Parents in these regions tend to instill discipline, respect for rules, and conservative values in their children.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'exp8',
            alignment: 'left',
            hidden: false,
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >How to read</span> ',
            image: './howto.png',
            description: 'The charts below are built based on the latest data from the World Values Survey and refer to the percentage of parents in each country who consider certain qualities to be especially important. ',
            location: {
                center: [12.02595, 49.90885],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'twelve-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './romanias.png',
            description: '',
            location: {
                center: [26.164705, 44.377613],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'thirteen-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './romania.png',
            description: 'For Romanian parents, hard work is important. The child must learn, work hard, and be responsible. Additionally, among the analyzed countries, half of the parents in Romania consider religious faith to be important in a child`s education. Romanian parents have the highest percentage in this aspect among the analyzed European countries. ',
            location: {
                center: [26.164705, 44.377613],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 


        {
            id: 'two-identifier',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './Cyprus.png',     
            description: '',
            location: {
                center: [32.989018, 35.039941],
                zoom: 8,
                pitch: 60,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'three-identifier',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './cipru.png',    
            description: 'Over 80% of Cypriot parents believe that good manners are highly important and consider them to be the most crucial skill they pass on to their children. Equally important to them are tolerance, respect, and hard work.',
            location: {
                center: [32.989018, 35.039941],
                zoom: 8,
                pitch: 60,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

    
        {
            id: 'four-identifier',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './Czechia.png',
            description: '',
            location: {
                center: [14.496911, 50.017777],
                zoom: 8,
                pitch: 60,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'five-identifier',
            alignment: 'left',
            hidden: false,
            title: '', 
            image: './cehia.png',
            description: 'For Czech parents, instilling a sense of responsibility in their children is extremely important. Just over 60% of parents view it as the most crucial skill. Tolerance, determination and saving money follow closely, with a few percentage points difference.',
            location: {
                center: [14.496911, 50.017777],
                zoom: 8,
                pitch: 60,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'six-identifier',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './germany.png',
            description: '',
            location: {
                center: [9.464329, 48.817151],
                zoom: 8,
                pitch: 60,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seven-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './germania.png',
            description: '84% of parents in Germany prioritize good manners as one of the top skills for their children. 80% of them consider instilling a sense of responsibility as an important aspect of their children`s education. Independence and tolerance also play a significant role in the education of young Germans. ',
            location: {
                center: [9.464329, 48.817151],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eight-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './greece.png',
            description: '',
            location: {
                center: [23.764389, 37.951507],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'nine-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './grecia.png',
            description: 'For Greeks, hard work and good manners are equally important. Similar to several other Balkan nations, imagination or financial literacy are not among the most important values that parents aim to transmit to their children.',
            location: {
                center: [23.764389, 37.951507],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ten-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './netherlands.png',
            description: '',
            location: {
                center: [4.860635, 52.370084],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eleven-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './olanda.png',
            description: 'Responsibility is the most important quality that a parent in the Netherlands can transmit to their child. Other values such as independence, tolerance, and respect are also important. Interestingly, after Serbians, the Dutch rank as the second European nation for whom not being selfish is important.',
            location: {
                center: [4.860635, 52.370084],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
        
        {
            id: 'forteen-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './russia.png',
            description: '',
            location: {
                center: [37.432584, 55.450047],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifteen-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './rusia.png',
            description: 'Similar to other Eastern European nations, Russian parents prioritize hard work as a key characteristic for their children to acquire. However, unlike some other countries in the former communist bloc, financial education appears to be important for Russians. 45% of parents believe it is important to teach children how to manage their money.',
            location: {
                center: [37.432584, 55.450047],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixteen-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './serbias.png',
            description: '',
            location: {
                center: [21.476411, 44.490322],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
        {
            id: 'seventeen-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './serbia.png',
            description: 'Contrary to popular perception, for Serbian parents, religious faith is the least important aspect in a child`s education. The emphasis is placed on good manners and instilling a sense of responsibility. Obedience is also important for Serbian parents. In comparison to other European countries, over 40% of parents in Serbia consider obedience to be important. ',
            location: {
                center: [21.476411, 44.490322],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eighteen-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './slovakia.png',
            description: '',
            location: {
                center: [17.063918, 48.119981],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'nineteen-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './slovacia.png',
            description: 'After Russia, Slovakia is another country where a high percentage of parents support financial education. However, the primary focus is on hard work, responsability, tolerance, and respect.',
            location: {
                center: [17.063918, 48.119981],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twenty-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './turkey.png',
            description: '',
            location: {
                center: [28.968874, 41.027248],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twentyone-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './turcia.png',
            description: 'For Turkish parents, the most important thing their child can learn besides good manners is tolerance and respect for others. Hard work comes next.',
            location: {
                center: [28.968874, 41.027248],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twentytwo-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './ukraine.png',
            description: '',
            location: {
                center: [30.612209, 50.273104],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'twentythree-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './ucraina.png',
            description: 'The ability to work hard and responsibility are the most important characteristics that children in Ukraine are expected to have, according to their parents.',
            location: {
                center: [30.612209, 50.273104],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fin1',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'In Eastern Europe and the Balkans, there is a cultural and socio-economic reality that places special emphasis on work and effort. This is largely due to the gap compared to Western European countries in terms of economic development and living standards. As a result, parents in these regions teach their children from an early age the importance of work and responsibility in fulfilling tasks.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'fin2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'The central reason for this attitude towards work is the need to overcome the challenging conditions in many countries in these regions. The economic and infrastructural gap between East and West can lead to a pragmatic approach to life, where work becomes a crucial means to secure a decent living and to rise above the limitations imposed by the surrounding environment.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 3,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'fin3',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'There is a tendency in these regions to underestimate or neglect other skills and qualities that are not directly related to hard work. Qualities such as money management, altruism, or imagination may take a backseat, with priority given to work and material achievements. This is largely due to the need to address immediate problems and build financial stability.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'fin4',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'In 2023, there were 2.2 billion children living worldwide, and approximately 80 million of them were living in the European Union. Each child is born and will grow up under different conditions and opportunities, depending on the country and family they were born into. ',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },


        
        

    ]
};