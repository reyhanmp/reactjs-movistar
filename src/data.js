var Movie = [
    {
        name : "Dune",
        year : 2021,
        img_src : "Dune.jpg",
        movie_link : "https://www.imdb.com/title/tt1160419/?ref_=hm_fanfav_tt_i_1_pd_fp1",
        movie_desc : "Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.",
        movie_rating : "8.3"
    },
    {
        name : "Squid Game",
        year : 2021,
        img_src : "SquidGame.jpg",
        movie_link : "https://www.imdb.com/title/tt10919420/?ref_=hm_fanfav_tt_i_2_pd_fp1",
        movie_desc : "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes. A survival game that has a whopping 45.6 billion-won prize at stake.",
        movie_rating : "8.1"
    },
    {
        name : "No Time to Die",
        year : 2021,
        img_src : "NoTimeToDie.jpg",
        movie_link : "https://www.imdb.com/title/tt2382320/?ref_=hm_fanfav_tt_i_3_pd_fp1",
        movie_desc : "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
        movie_rating : "7.6"
    },
    {
        name : "Free Guy",
        year : 2021,
        img_src : "FreeGuy.jpg",
        movie_link : "https://www.imdb.com/title/tt6264654/?ref_=hm_fanfav_tt_i_4_pd_fp1",
        movie_desc : "A bank teller discovers that he's actually an NPC inside a brutal, open world video game.",
        movie_rating : "7.2"
    },
    {
        name : "Midnight Mass",
        year : 2021,
        img_src : "MidnightMass.jpg",
        movie_link : "https://www.imdb.com/title/tt10574558/?ref_=hm_fanfav_tt_i_5_pd_fp1",
        movie_desc : "An isolated island community experiences miraculous events - and frightening omens - after the arrival of a charismatic, mysterious young priest.",
        movie_rating : "7.7"
    },
    {
        name : "Sardar Udham",
        year : 2021,
        img_src : "SardarUdham.jpg",
        movie_link : "https://www.imdb.com/title/tt10280296/?ref_=hm_fanfav_tt_i_6_pd_fp1",
        movie_desc : "A biopic detailing the 2 decades that Punjabi Sikh revolutionary Udham Singh spent planning the assassination of the man responsible for the Jallianwala Bagh massacre.",
        movie_rating : "9.1"
    },
    {
        name : "Maid",
        year : 2021,
        img_src : "Maid.jpg",
        movie_link : "https://www.imdb.com/title/tt11337908/?ref_=hm_fanfav_tt_i_7_pd_fp1",
        movie_desc : "After fleeing an abusive relationship, a young mother finds a job cleaning houses as she fights to provide for her child and build them a better future.",
        movie_rating : "8.5"
    },
    {
        name : "You",
        year : 2021,
        img_src : "You.jpg",
        movie_link : "https://www.imdb.com/title/tt7335184/?ref_=hm_fanfav_tt_i_8_pd_fp1",
        movie_desc : "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        movie_rating : "7.7"
    },
    {
        name : "The Suicide Squad",
        year : 2021,
        img_src : "TheSuicideSquad.jpg",
        movie_link : "https://www.imdb.com/title/tt6334354/?ref_=hm_fanfav_tt_i_10_pd_fp1",
        movie_desc : "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
        movie_rating : "7.3"
    },
    {
        name : "What If...?",
        year : 2021,
        img_src : "WhatIf.jpg",
        movie_link : "https://www.imdb.com/title/tt10168312/?ref_=hm_fanfav_tt_i_13_pd_fp1",
        movie_desc : "Exploring pivotal moments from the Marvel Cinematic Universe and turning them on their head, leading the audience into uncharted territory.",
        movie_rating : "7.6"
    },
    {
        name : "Joker",
        year : 2019,
        img_src : "Joker.jpg",
        movie_link : "https://www.imdb.com/title/tt7286456/?ref_=hm_fanfav_tt_i_15_pd_fp1",
        movie_desc : "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
        movie_rating : "8.4"
    },
];

export function getMovieList() {
    return Movie;
}

export function getMovieComponent(name) {
    return Movie.find(
        Movie => Movie.name === name
    );
}