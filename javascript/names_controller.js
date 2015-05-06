angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.names = [
        {videoUrl: "https://www.youtube.com/watch?v=17N4xfw9tcE", imgUrl: "https://i.ytimg.com/vi/17N4xfw9tcE/hqdefault.jpg?w=240&h=136&sigh=01JQL2oIPmX_Bn4fd9PD8LxtbRk", name:"GTA V PC",players:"Damon, Rugby, Alistair", date:"1"},
		
        {videoUrl:"https://www.youtube.com/watch?v=6jSbfzKfImI",imgUrl:"https://i.ytimg.com/vi/6jSbfzKfImI/hqdefault.jpg?w=240&h=136&sigh=hxz9tcA02HPCXN8_VHV3uhOLMqU",name:"Orion - Awaiting Perry's Demise",players:"Perry, Damon, Rugby, Alistair", date:"3"},
		
        {videoUrl:"https://www.youtube.com/watch?v=wJRh1Z1muuc", imgUrl:"https://i.ytimg.com/vi/wJRh1Z1muuc/hqdefault.jpg?w=240&h=136&sigh=SfkfWcybmeFa-yIt9NBtR5LzmBo",name:"Payday 2; Do As You're Told",players:"Rugby", date:"2"},	
			
        {videoUrl:"https://www.youtube.com/watch?v=lN2YU3WhYw8", imgUrl:"https://i.ytimg.com/vi/lN2YU3WhYw8/hqdefault.jpg?w=240&h=136&sigh=iOXFG0oo6WeSqzTawHhQHiN8EXQ",name:"Farcry 3 - Stand Next to The Barrel!",players:"", date:""},
					
        {videoUrl:"https://www.youtube.com/watch?v=7Q41TmHDR7Y", imgUrl:"https://i.ytimg.com/vi/7Q41TmHDR7Y/hqdefault.jpg?w=240&h=136&sigh=OaJ0ALV9DLr-R3_jk_NsXykbF8w",name:"Insurgency: BDSM and Copyright",players:"", date:""},
					
        {videoUrl:"https://www.youtube.com/watch?v=7E3dGDzWrNc", imgUrl:"https://i.ytimg.com/vi/7E3dGDzWrNc/hqdefault.jpg?w=240&h=136&sigh=6nuPFjhk0E81A5--MoMIxi7qbys",name:"G-Mod Shenanigans",players:"", date:""},
					
        {videoUrl:"https://www.youtube.com/watch?v=6b2oc7MUb9o", imgUrl:"https://i.ytimg.com/vi/6b2oc7MUb9o/hqdefault.jpg?w=240&h=136&sigh=Snlp_iSR-UkUkNg_2T_ilTckZ9s",name:"Rugby Breaks Sleeping Dogs?",players:"", date:""},
					
        {videoUrl:"https://www.youtube.com/watch?v=xX6hWZml8Bw", imgUrl:"https://i.ytimg.com/vi/xX6hWZml8Bw/hqdefault.jpg?w=240&h=136&sigh=EgvIqMdrQzbOmWHGt4Po4Kx80hw",name:"Minecraft Survival Episode 4",players:"", date:""},
					
        {videoUrl:"https://www.youtube.com/watch?v=QV5ZYMM-bN4", imgUrl:"https://i.ytimg.com/vi/QV5ZYMM-bN4/hqdefault.jpg?w=240&h=136&sigh=eb7YJs9WL5mOPxKa2tyUemOBrcI",name:"Super Meat Boy",players:"", date:""},
					
        {videoUrl:"https://www.youtube.com/watch?v=pEAaW3zpobI", imgUrl:"https://i.ytimg.com/vi/pEAaW3zpobI/hqdefault.jpg?w=240&h=136&sigh=K-2FbGb3BOTUsGeyZiYt1AKr5M8",name:"Payday 2 - Chocolate Omlette",players:"", date:""},
					
        {videoUrl:"https://www.youtube.com/watch?v=s7jNcAm0IYs", imgUrl:"https://i.ytimg.com/vi/s7jNcAm0IYs/hqdefault.jpg?w=240&h=136&sigh=_Cawc9WLH8NN3sBcPULSlXPltvo",name:"Sleeping Dogs: Worst Wedding",players:"", date:""},
					
        {videoUrl:"https://www.youtube.com/watch?v=z6lFNeC6ELU", imgUrl:"https://i.ytimg.com/vi/z6lFNeC6ELU/hqdefault.jpg?w=240&h=136&sigh=LEab1MrURbDKxp4eN2IU4XPJMjU",name:"Terraria Part 2... Finally!",players:"", date:""},
					
        {videoUrl:"https://www.youtube.com/watch?v=JXUZ2W5h9Qw", imgUrl:"https://i.ytimg.com/vi/JXUZ2W5h9Qw/hqdefault.jpg?w=240&h=136&sigh=EWlLgMpPtJWhVPyXEGbLNiIdr-A",name:'The Crackpack: "I was Hungry',players:"", date:""},
					
        {videoUrl:"https://www.youtube.com/watch?v=7Q0nyiDbS6k", imgUrl:"https://i.ytimg.com/vi/7Q0nyiDbS6k/hqdefault.jpg?w=240&h=136&sigh=nmYsHn2SDdJkLoi-GgO_RkfjGUY",name:"Tree Quest - Minecraft Survival",players:"", date:""},
					
        {videoUrl:"https://www.youtube.com/watch?v=f4ygTaDxKyU", imgUrl:"https://i.ytimg.com/vi/f4ygTaDxKyU/hqdefault.jpg?w=240&h=136&sigh=skw8rjKulXlvNiWUDXaWDBNU9TI",name:"Minecraft Survival Episode 3",players:"", date:""},
					
        {videoUrl:"https://www.youtube.com/watch?v=6krE2RrpW9s", imgUrl:"https://i.ytimg.com/vi/6krE2RrpW9s/hqdefault.jpg?w=240&h=136&sigh=H3bx201tHVDPv7QNEwZFwD9RtsU",name:"Sanctum 2",players:"", date:""},
					
        {videoUrl:"https://www.youtube.com/watch?v=Hbux4X7FEvY", imgUrl:"https://i.ytimg.com/vi/Hbux4X7FEvY/hqdefault.jpg?w=240&h=136&sigh=CIZeVLMFEi9gjxgiHtg2h99kbNs",name:"Payday 2: Damons A Dick",players:"", date:""},
					
        {videoUrl:"https://www.youtube.com/watch?v=ioeesB1yYyw", imgUrl:"https://i.ytimg.com/vi/ioeesB1yYyw/hqdefault.jpg?w=240&h=136&sigh=GrytTm0iFZUFz4uXxcgQY7RPEZk",name:"Payday 2: Subscribe to my Uncle",players:"", date:""},
					
        {videoUrl:"https://www.youtube.com/watch?v=wxU-7YFA93E", imgUrl:"https://i.ytimg.com/vi/wxU-7YFA93E/hqdefault.jpg?w=240&h=136&sigh=a2LH101ZriKxHqZdr6axxzfRU4Q",name:"Team Fortress 2... Again",players:"", date:""},
					
        {videoUrl:"https://www.youtube.com/watch?v=_H_QKWzQodU", imgUrl:"https://i.ytimg.com/vi/_H_QKWzQodU/hqdefault.jpg?w=240&h=136&sigh=Rvo1DLpPoyBRJsSgYZY5f6RYu6s",name:"Payday 2 - Jumping is Criminal",players:"", date:""},
					
        {videoUrl:"https://www.youtube.com/watch?v=qIPZg0uTQfA", imgUrl:"https://i.ytimg.com/vi/qIPZg0uTQfA/hqdefault.jpg?w=240&h=136&sigh=oIg5ZXO_48uvRUxdWQMZL0H-eDk",name:"Minecraft Survival Episode 2",players:"", date:""},
					
        {videoUrl:"https://www.youtube.com/watch?v=NJ-_c3WWCHg", imgUrl:"https://i.ytimg.com/vi/NJ-_c3WWCHg/hqdefault.jpg?w=240&h=136&sigh=fGz8irG09YnhwIAaau8Y6bvGIqc",name:"Minecraft Survival Episode 1",players:"", date:""},
					
        {videoUrl:"https://www.youtube.com/watch?v=tN0GGMed3ig", imgUrl:"https://i.ytimg.com/vi/tN0GGMed3ig/hqdefault.jpg?w=240&h=136&sigh=yEquFx9CqLls6Ya98i_m_iNO5e0",name:"TF2",players:"", date:""},
					
        {videoUrl:"https://www.youtube.com/watch?v=LD3v_FR9slo", imgUrl:"https://i.ytimg.com/vi/LD3v_FR9slo/hqdefault.jpg?w=240&h=136&sigh=rGbBOxFgAFYZmqR8X4R6REyUHoY",name:"Shutup - Terraria Episode 1",players:"", date:""},
					
        {videoUrl:"https://www.youtube.com/watch?v=PyUEEhOSnT8", imgUrl:"https://i.ytimg.com/vi/PyUEEhOSnT8/hqdefault.jpg?w=240&h=136&sigh=2BgBDFcatfdlQlqR73DVk7atIlY",name:"Minecraft Episode 3 - Forgetting",players:"", date:""},
					
        {videoUrl:"https://www.youtube.com/watch?v=umhRdJBioxE", imgUrl:"https://i.ytimg.com/vi/umhRdJBioxE/hqdefault.jpg?w=240&h=136&sigh=buysS0CGrxXMC48LzDHmyatLBa8",name:"Minecraft Episode 2 - Wall",players:"", date:""},
					
        {videoUrl:"https://www.youtube.com/watch?v=VMDI3fUgNxo", imgUrl:"https://i.ytimg.com/vi/VMDI3fUgNxo/hqdefault.jpg?w=240&h=136&sigh=f8mQG0ebGu_nr5h_6nj3I_3ABnk",name:"Minecraft Episode 1 - Death by Creeper",players:"", date:""},
					
        {videoUrl:"https://www.youtube.com/watch?v=DG8QK6506z4", imgUrl:"https://i.ytimg.com/vi/DG8QK6506z4/hqdefault.jpg?w=240&h=136&sigh=gmAzp4Ja6aLT1hPs4Ck9MoVOcmM",name:"Minecraft PvP - P+R 2",players:"", date:""},
					
        {videoUrl:"https://www.youtube.com/watch?v=Q0BS6gt84M8", imgUrl:"https://i.ytimg.com/vi/Q0BS6gt84M8/hqdefault.jpg?w=240&h=136&sigh=VPNE7CZNiiXLW9GkYkWP2a5oVeU",name:"Minecraft PvP - D+B 2",players:"", date:""},
					
        {videoUrl:"https://www.youtube.com/watch?v=JYkWLiCe7h0", imgUrl:"https://i.ytimg.com/vi/JYkWLiCe7h0/hqdefault.jpg?w=240&h=136&sigh=J1VzT0wZAeBhrWh5SFByhmJ5lfQ",name:"Minecraft PvP - P+R 1",players:"", date:""},
					
        {videoUrl:"https://www.youtube.com/watch?v=EsAj0RJpLkY", imgUrl:"https://i.ytimg.com/vi/EsAj0RJpLkY/hqdefault.jpg?w=240&h=136&sigh=ThAyLwxLnixvL5QDhk1aDWTNQmk",name:"Minecraft PvP - D+B 1",players:"", date:""},
		
    ];
});
