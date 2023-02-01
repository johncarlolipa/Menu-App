const menu = [
    {
        id: 1,
        title: "Fahrenheit 451",
        author: "ray bradbury",
        category: "Classic",
        price: 85.99,
        img: "./images/img1.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum reiciendis quam odio quod veritatis non quas voluptas repellendus blanditiis aspernatur.`,
    },
    {
        id: 2,
        title: "the rewind",
        author: "Allison Winn Scotch",
        category: "Romance",
        price: 333.99,
        img: "./images/img6.jpg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
      },
      {
        id: 3,
        title: "home body",
        author: "Rupi Kaur",
        category: "Poetry",
        price: 89,
        img: "./images/img11.jpg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
      },
      {
        id: 4,
        title: "Atomic Habits",
        author: "James Clear",
        category: "Self-Help",
        price: 299,
        img: "./images/img16.jpg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
      },
      {
        id: 5,
        title: "Atlas of the Heart",
        author: "Brene Brown",
        category: "Self-Help",
        price: 229,
        img: "./images/img22.jpg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
      },
      {
        id: 6,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        category: "Self-Help",
        price: 189,
        img: "./images/img23.jpg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
      },
      {
        id: 7,
        title: "This is How We Do It",
        author: "Kevin Hart",
        category: "Nonfiction",
        price: 89,
        img: "./images/img18.jpg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
      },
      {
        id: 8,
        title: "Never Finished",
        author: "David Goggins",
        category: "Nonfiction",
        price: 129,
        img: "./images/img17.jpg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
      },
      {
        id: 9,
        title: "home body",
        author: "Rupi Kaur",
        category: "Poetry",
        price: 169,
        img: "./images/img12.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
      {
        id: 10,
        title: "the old man and the sea",
        author: "Ernest Hemingway",
        category: "Classic",
        price: 22.99,
        img: "./images/img2.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
];

//set-up elements
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");


// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu); //invoking displayMenuItems
    displayMenuButtons(); // invoking displayMenuButtons
});
    
function displayMenuItems(menuItems) {   
    let displayMenu = menuItems.map(function (item) {//item ang parameter; map ang gamit kasi bawat element ay ia-apply yung template ng content.
            return `<article class="menu-item">
            <img src=${item.img} class="photo" alt=${item.title}>
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">${item.price}</h4>
                    <h4 class="author">${item.author}</h4>
                </header>
                <p class="item-text">${item.desc}</p>
            </div>
        </article>`
        });// eto yung laman ng displayMenu variable

        displayMenu = displayMenu.join("");//jinoin mo lahat ng item sa array
        sectionCenter.innerHTML = displayMenu;// eto na yung laman ng mismong HTML (DOM)
};

function displayMenuButtons() {
    const categories = menu.reduce(function (values, item){
        if (!values.includes(item.category)) {
            values.push(item.category);
        } //kung yung values ay wala dun sa category, idagdag(push) yung values na yun. //kung yung item ay wala dun sa rray, idagdag yung item na yun dun sa array. 
        return values;// kung nandun na i-return na lang yung values o item na yun.
    }, 
    ["all"]// values
    );
    const categoryBtns = categories.map( function (category) {
        return `<button class="filter-btn" type="button" data-btn=${category}>${category}</button>`;
    })
    .join(""); // inayos mo dito yung buttons na ididspaly mo dun sa innerHTML. Since di mo ilalagay lahat, pinaikli mosya, guamit ka ng map para lahat ng element makuha. 
    
    btnContainer.innerHTML = categoryBtns;// inassign mo yung categorybtns sa iinerhtml ng btncontainer
    const filterBtns = btnContainer.querySelectorAll('.filter-btn');
// ilalagay mo yung filter buttons after mong maset lahat ng buttons

    //filter items (isasam mo tong function na to sa parent function para gumana yung filterbuttons)
    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
        const category = e.currentTarget.dataset.btn;//categorybtns to
        const menuCategory = menu.filter(function (menuItem) {
            // console.log(menuItem.category);
            if (menuItem.category === category) {
            return menuItem;
            } //kapag pareho yung menuitemcategory sa category na kiclick, then ipapakita yung laman ng category na yun. ex, if shakes yung knilick, lalabas yung laman nung menuItem na may category na shake
        });
        if (category === "all") {
            displayMenuItems(menu);//ipapakita lahat ng menu kapag all click
        } else {
            displayMenuItems(menuCategory);// yung mismong specific category lang
        }
        });
    });    
}
