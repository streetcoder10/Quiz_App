(function(){angular.module("footballFacts").factory("DataService", DataService);

    function DataService(){
        var dataObj = {
            teamsData: teamsData,
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };

        return dataObj;
    }

    var correctAnswers = [1,3,1,0,2,3,0,1,2,0];

    var quizQuestions  = [
        {
            type: "text",
            text: "Which team won the 2002 Champions League?",
            possibilities: [
                {
                    answer: "Barcelona"
                },
                {
                    answer: "Real Madrid"
                },
                {
                    answer: "Arsenal"
                },
                {
                    answer: "Bayer Leverkusen"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which stadium has the biggest capacity?",
            possibilities: [
                {
                    answer: "Santiago Bernabeu, Madrid"
                },
                {
                    answer: "Signal Iduna Park, Borrusia"
                },
                {
                    answer: "Allianz Arena, Munchen"
                },
                {
                    answer: "Nou Camp, Barcelona"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of these stadiums is the Signal Iduna Park",
            possibilities: [
                {
                    answer: "img/bernabeu.jpg"
                },
                {
                    answer: "img/signal.jpg"
                },
                {
                    answer: "img/oldt.png"
                },
                {
                    answer: "img/allianz.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which player was the top scorer in the Champions League 2013",
            possibilities: [
                {
                    answer: "Cristiano Ronaldo"
                },
                {
                    answer: "Lionel Messi"
                },
                {
                    answer: "Robert Lewandowski"
                },
                {
                    answer: "Luis Suarez"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Who partnered as the second strkier with Theiry Henry in 2004?",
            possibilities: [
                {
                    answer: "Robert Pires"
                },
                {
                    answer: "Patrick Veira"
                },
                {
                    answer: "Dennis Bergkamp"
                },
                {
                    answer: "Kolo Toure"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of these players have won more than 1 ballon d'or",
            possibilities: [
                {
                    answer: "Zinedine Zidane"
                },
                {
                    answer: "Kaka"
                },
                {
                    answer: "Michael Owen"
                },
                {
                    answer: "Ronaldo"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which Stadium Hosted the 2011 Champions League?",
            possibilities: [
                {
                    answer: "img/wembley.jpg"
                },
                {
                    answer: "img/celtic.jpg"
                },
                {
                    answer: "img/mill.jpg"
                },
                {
                    answer: "img/siro.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which country has the most Champions League winning teams?",
            possibilities: [
                {
                    answer: "Italy"
                },
                {
                    answer: "Spain"
                },
                {
                    answer: "England"
                },
                {
                    answer: "Germany"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of these players have more than 2 Champions League Medals?",
            possibilities: [
                {
                    answer: "Sneijder"
                },
                {
                    answer: "Fernando Torres"
                },
                {
                    answer: "Gerard Pique"
                },
                {
                    answer: "Steven Gerrard"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "In which year did Stadio Olimpico Host the Champions League Final?",
            possibilities: [
                {
                    answer: "2008"
                },
                {
                    answer: "2009"
                },
                {
                    answer: "2010"
                },
                {
                    answer: "2011"
                }
            ],
            selected: null,
            correct: null
        }
    ];

    var teamsData = [
        {
            name: "Real Madrid",
            image_url: "img/madrid.png",
            location: "Santiago Bernabeu, Madrid",
            years: "2013-2017",
            titles: "11",
            bestPlayers: "CR7, Ramos",
            description: "While the 21st century so far has not been as kind to Real Madrid as the 20th century was, Real has still enjoyed its moments of brilliance. In the first 8 years of the century, Real Madrid C.F. won a total of 11 titles: seven local and four international. Real Madrid started off the 2000s by taking its eighth UEFA Champions League title in 2000, representing the 1999-2000 season. They followed that by capturing the La Liga title for the 2000-01 season and then repeating as European champions for a record ninth time in the 2001-02 season.That same year they went on to capture their third Intercontinental Cup, which is now known as the FIFA Club World Cup. In 2002-03, Real Madrid made it four straight years with at least one trophy by capturing the La Liga championship again as well as the UEFA Super Cup. In both years that they won the La Liga trophy, they also obtained the Supercopa de España, a championship disputed between the previous year’s La Liga and Copa del Rey champions. Throughout the next few years, Real went without a title, until it finally broke through again to win its 30th overall La Liga title in 2006-07, a win they repeated the following year in 2007-08. Right before the start of the 2008-09 season, Real Madrid won its eighth Supercopa de España to cap off a strong period."
        },
        {
          name: "Chelsea",
          image_url: "img/chelsea.png",
          location: "Stamford Bridge, London",
          years: "2009-2012",
          titles: "5",
          bestPlayers: "Drogba, Lampard",
          description: "Jose Mourinho made his name by winning the 2004 Champions League with FC Porto. The next step in his career would come at Chelsea, where he would win various domestic crowns, creating the greatest team in the club’s history. In Mourinho’s first season at the club, Chelsea won the Premier League title with a record total of 95 points. While Arsenal’s Invincibles side of 2003-2004 are often considered the greatest Premier League side of all time, it must be remembered that Chelsea only lost one game in the 2004-2005 season. This sole defeat came away at Manchester City, a 1-0 loss in which Nicolas Anelka converted a controversial penalty. And although it may be argued that this side played defensive soccer and that Mourinho had a fantastic side, this Chelsea outfit were the ultimate results-based team. They conceded just 15 goals in 38 games that season, which remains the Premier League record. Nowadays, most teams are unable to go through the first half of the season conceding this many. In the 2005-2006, Chelsea arguably had a better team, and defended the Premier League title. While their points total was lower than the previous season and they lost three more games, they still won 18 out of their 19 games at Stamford Bridge. Here are some key features of the side."
        },
        {
          name: "Inter Milan",
          image_url: "img/inter.png",
          location: "San Siro, Milano",
          years: "2009-2010",
          titles: "3",
          bestPlayers: "Sneijder, Eto'o",
          description: "It is often said that one of the staples of a great rivalry is when one team finds itself a direct benefactor of its rival’s misfortune. This statement certainly holds true for Internazionale de Milano among the great teams of the current century. One of Inter’s fiercest rivals is Juventus F.C. Back in the 2005-06 season of the Italian Serie A, one of the greatest scandals in league history was revealed. Several clubs were discovered to have been involved in match fixing and other illegal activities. Juventus had originally won the league title that year, but after being the most penalized team in the scandal, it was stripped of its championship and relegated to Serie B. The title was then awarded to Inter, who had not raised the league trophy in 17 years. The following year Inter proved any critics who thought they may have been undeserving champions wrong by winning the title outright. This continued a string of five consecutive national titles for the nerazzurri, as they would win the Scudetto from 2005-06 through 2009-10. Overall, Inter won a total of 12 titles in that five-year span, of which the most important were the 2009-10 UEFA Champions League, in which they took out mighty F.C. Barcelona in the semifinals, and the 2010 FIFA Club World Cup, their first top-tier international titles in more than 40 years."
        },
        {
          name: "Barcelona",
          image_url: "img/barca.png",
          location: "Nou Camp, Barcelona",
          years: "2008-2009",
          titles: "6",
          bestPlayers: "Messi, Iniesta",
          description: "Without a doubt the most dominant club team of the 21st century has been the F.C. Barcelona of the past few years. Often lauded as the best team in the history of the sport, F.C. Barcelona has amassed a total of 17 titles, of which 12 are local and five are international. Even though Barcelona’s first title of the century did not come until the 2004-2005 season, the foundations for the current era of success were laid the previous year when the blaugranas mounted an incredible comeback that put them just short off the league title. The following year F.C. Barcelona went on to win their first of two consecutive league championships (2004-05 and 2005-06). With the arrival of manager Pep Guardiola at the beginning of the 2008-09 season, the team began its rise to legendary levels. This was cemented by the threepeat of La Liga titles from 2008 to 2011. The most impressive part of F.C. Barcelona’s recent dominance has been at the international level."
        },
        {
          name: "Manchester United",
          image_url: "img/united.png",
          location: "Old Trafford, Manchester",
          years: "2007-2009",
          titles: "7",
          bestPlayers: "CR7, Rooney",
          description: "Manchester United F.C. has been, without a doubt, the dominant team in English football throughout the 21st century. Throughout that period, Manchester United obtained a total of 18 titles: 16 local and two international ones. The local championships included seven Premier League titles, one FA Cup, three League Cups and five Community Shields. The team’s best year was without a doubt 2007-08, capturing a total of four titles:  the Premier League, the Community Shield, the UEFA Champions League and the FIFA Club World Cup. The most impressive part about Manchester United’s start to the century has been its consistency and longevity. Manchester's first trophy of the decade came in 2000 and its last in 2011."
        },
        {
          name: "Chelsea",
          image_url: "img/chelsea.png",
          location: "Stamford Bridge, London",
          years: "2004-2006",
          titles: "Over 80 years",
          bestPlayers: "Herbivore",
          description: "Jose Mourinho made his name by winning the 2004 Champions League with FC Porto. The next step in his career would come at Chelsea, where he would win various domestic crowns, creating the greatest team in the club’s history. In Mourinho’s first season at the club, Chelsea won the Premier League title with a record total of 95 points. While Arsenal’s Invincibles side of 2003-2004 are often considered the greatest Premier League side of all time, it must be remembered that Chelsea only lost one game in the 2004-2005 season. This sole defeat came away at Manchester City, a 1-0 loss in which Nicolas Anelka converted a controversial penalty. And although it may be argued that this side played defensive soccer and that Mourinho had a fantastic side, this Chelsea outfit were the ultimate results-based team."
        },
        {
          name: "A.C.Milan",
          image_url: "img/milan.png",
          location: "San Siro, Milano",
          years: "2003-2007",
          titles: "7",
          bestPlayers: "Kaka, Maldini",
          description: "Some might say that the first ten years of the 21st Century have not been particularly memorable for Milan. The decade could, perhaps, be defined as the one that saw the crown of the most successful club side of the modern age begin to slip. The Rossoneri have only lifted one scudetto since the year 2000, they were embroiled up to their necks in the Calciopoli scandal, they somehow lost a Champions League final to a vastly inferior Liverpool side despite going in at half-time with a three goal lead and they have just sold their best attacking player to Real Madrid, even though he made it perfectly clear that he didn't want to go.  But, while city rivals Inter have dominated domestically, Milan have continued to shine on the European stage. Two Champions League titles, two UEFA Super Cups and one FIFA Club World Cup isn't a bad return for a team supposedly going downhill."
        },
        {
          name: "Barcelona",
          image_url: "img/barca.png",
          location: "Nou Camp, Barcelona",
          years: "2004-2006",
          titles: "6",
          bestPlayers: "Ronaldihno, Messi",
          description: "Without a doubt the most dominant club team of the 21st century has been the F.C. Barcelona of the past few years. Often lauded as the best team in the history of the sport, F.C. Barcelona has amassed a total of 17 titles, of which 12 are local and five are international. Even though Barcelona’s first title of the century did not come until the 2004-2005 season, the foundations for the current era of success were laid the previous year when the blaugranas mounted an incredible comeback that put them just short off the league title. The following year F.C. Barcelona went on to win their first of two consecutive league championships (2004-05 and 2005-06). With the arrival of manager Pep Guardiola at the beginning of the 2008-09 season, the team began its rise to legendary levels. This was cemented by the threepeat of La Liga titles from 2008 to 2011. The most impressive part of F.C. Barcelona’s recent dominance has been at the international level."
        },
        {
          name: "Arsenal",
          image_url: "img/arsenal.png",
          location: "Highbury, London",
          years: "2002-2004",
          titles: "7",
          bestPlayers: "Henry, Bergkamp",
          description: "It is the greatest ever feat achieved in English football and will probably not be replicated ever again. The 2003/04 Arsenal team gained immortality by going the entire Premier League season unbeaten and what made the remarkable feat all the more impressive was the fact that it was achieved through a style which can be described as beautiful football at its best. Having narrowly lost out in the title race to Manchester United during the previous campaign, Arsenal were determined than ever to set the record straight heading into the 2003/04 campaign. Despite their second place finish in the league last time out, many felt that Arsenal were actually the best team and manager Arsene Wenger knew that he did not need to make too many drastic changes to his side."
        },
        {
          name: "Real Madrid",
          image_url: "img/madrid.png",
          location: "Santiago Bernabeu, Madrid",
          years: "2001-2004",
          titles: "7",
          bestPlayers: "Ronaldo, Zidane",
          description: "While the 21st century so far has not been as kind to Real Madrid as the 20th century was, Real has still enjoyed its moments of brilliance. In the first 8 years of the century, Real Madrid C.F. won a total of 11 titles: seven local and four international. Real Madrid started off the 2000s by taking its eighth UEFA Champions League title in 2000, representing the 1999-2000 season. They followed that by capturing the La Liga title for the 2000-01 season and then repeating as European champions for a record ninth time in the 2001-02 season.That same year they went on to capture their third Intercontinental Cup, which is now known as the FIFA Club World Cup. In 2002-03, Real Madrid made it four straight years with at least one trophy by capturing the La Liga championship again as well as the UEFA Super Cup."
      }

    ];

})();
