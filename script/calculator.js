// Precomputation
const MAX_LEVEL = 120;
const MAX_MAGIC = 130;
const MAX_HEARTPHIAL = 50;

const HEARTPHIAL_HP  = [0, 0, 0, 0, 0, 0, 30, 30, 30, 30, 30, 30, 30, 60, 60, 60, 60, 60, 60, 90, 90, 90, 90, 90, 90, 120, 120, 120, 120, 120, 120, 150, 150, 150, 150, 150, 150, 190, 190, 190, 190, 190, 190, 230, 230, 230, 230, 230, 230, 270, 270];
const HEARTPHIAL_ATK = [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 20, 20, 20, 20, 20, 20, 40, 40, 40, 40, 40, 40, 60, 60, 60, 60, 60, 60, 80, 80, 80, 80, 80, 80, 100, 100, 100, 100, 100, 100, 120, 120, 120, 120, 120, 120];
const HEARTPHIAL_DEF = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 20, 20, 20, 20, 20, 20, 40, 40, 40, 40, 40, 40, 60, 60, 60, 60, 60, 60, 80, 80, 80, 80, 80, 80, 100, 100, 100, 100, 100, 100, 120, 120, 120, 120];

const HEARTPHIAL_HP_NO_PORTRAIT  = [0, 0, 0, 0, 30, 30, 60, 60, 90, 90, 90, 90, 120, 150, 150, 150, 180, 180, 180, 210, 210, 210, 240, 240, 240, 270, 270, 270, 300, 300, 300, 330, 330, 330, 330, 330, 330, 370, 370, 370, 370, 370, 370, 410, 410, 410, 410, 410, 410, 450, 450];
const HEARTPHIAL_ATK_NO_PORTRAIT = [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 20, 20, 20, 20, 20, 20, 40, 40, 40, 40, 40, 40, 60, 60, 60, 60, 60, 60, 80, 80, 80, 80, 80, 80, 100, 100, 100, 100, 100, 100, 120, 120, 120, 120, 120, 120];
const HEARTPHIAL_DEF_NO_PORTRAIT = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 20, 20, 20, 20, 20, 20, 40, 40, 40, 40, 40, 40, 60, 60, 60, 60, 60, 60, 80, 80, 80, 80, 80, 80, 100, 100, 100, 100, 100, 100, 120, 120, 120, 120];

const MAGIC_HP  = [0, 90, 90, 90, 180, 180, 180, 180, 270, 270, 270, 270, 360, 360, 360, 360, 450, 450, 450, 540, 540, 540, 540, 630, 630, 630, 630, 630, 720, 720, 720, 720, 810, 810, 810, 810, 810, 900, 900, 900, 900, 990, 990, 990, 990, 990, 1080, 1080, 1080, 1080, 1080, 1080, 1170, 1170, 1170, 1170, 1260, 1260, 1260, 1260, 1260, 1260, 1350, 1350, 1350, 1350, 1350, 1440, 1440, 1440, 1440, 1530, 1530, 1530, 1530, 1530, 1530, 1620, 1620, 1620, 1620, 1620, 1710, 1710, 1710, 1710, 1800, 1800, 1800, 1800, 1800, 1890, 1890, 1890, 1890, 1980, 1980, 1980, 1980, 1980, 1980, 2070, 2070, 2070, 2070, 2070, 2160, 2160, 2160, 2160, 2250, 2250, 2250, 2250, 2250, 2340, 2340, 2340, 2430, 2430, 2430, 2430, 2430, 2430, 2430, 2520, 2520, 2520, 2610, 2610, 2610];
const MAGIC_ATK = [0, 0, 32, 32, 32, 32, 64, 64, 64, 96, 96, 96, 96, 128, 128, 128, 128, 160, 160, 160, 160, 192, 192, 192, 224, 224, 224, 224, 224, 256, 256, 256, 256, 256, 288, 288, 288, 288, 320, 320, 320, 320, 320, 352, 352, 352, 352, 384, 384, 384, 384, 384, 384, 416, 416, 416, 416, 416, 448, 448, 448, 448, 448, 448, 480, 480, 480, 480, 512, 512, 512, 512, 512, 544, 544, 544, 544, 544, 544, 576, 576, 576, 576, 608, 608, 608, 608, 608, 640, 640, 640, 640, 672, 672, 672, 672, 672, 704, 704, 704, 704, 704, 704, 736, 736, 736, 736, 768, 768, 768, 768, 768, 800, 800, 800, 800, 800, 800, 800, 800, 800, 832, 832, 864, 864, 864, 896, 896, 896, 928, 928];
const MAGIC_DEF = [0, 0, 0, 32, 32, 32, 32, 64, 64, 64, 64, 96, 96, 96, 128, 128, 128, 128, 160, 160, 160, 160, 192, 192, 192, 192, 192, 224, 224, 224, 224, 256, 256, 256, 256, 288, 288, 288, 288, 288, 320, 320, 320, 320, 352, 352, 352, 352, 352, 384, 384, 384, 384, 384, 384, 416, 416, 416, 416, 448, 448, 448, 448, 448, 448, 480, 480, 480, 480, 480, 512, 512, 512, 512, 544, 544, 544, 544, 544, 544, 576, 576, 576, 576, 576, 608, 608, 608, 608, 640, 640, 640, 640, 640, 672, 672, 672, 672, 704, 704, 704, 704, 704, 704, 736, 736, 736, 736, 736, 768, 768, 768, 768, 800, 800, 800, 800, 800, 800, 800, 800, 800, 832, 832, 864, 864, 864, 896, 896, 896, 928];

const MAGIC_HP_5_STARS  = [0, 100, 100, 100, 200, 200, 200, 200, 300, 300, 300, 300, 400, 400, 400, 400, 500, 500, 500, 600, 600, 600, 600, 700, 700, 700, 700, 700, 800, 800, 800, 800, 900, 900, 900, 900, 900, 1000, 1000, 1000, 1000, 1100, 1100, 1100, 1100, 1100, 1200, 1200, 1200, 1200, 1200, 1200, 1300, 1300, 1300, 1300, 1400, 1400, 1400, 1400, 1400, 1400, 1500, 1500, 1500, 1500, 1500, 1600, 1600, 1600, 1600, 1700, 1700, 1700, 1700, 1700, 1700, 1800, 1800, 1800, 1800, 1800, 1900, 1900, 1900, 1900, 2000, 2000, 2000, 2000, 2000, 2100, 2100, 2100, 2100, 2200, 2200, 2200, 2200, 2200, 2200, 2300, 2300, 2300, 2300, 2300, 2400, 2400, 2400, 2400, 2500, 2500, 2500, 2500, 2500, 2600, 2600, 2600, 2700, 2700, 2700, 2700, 2700, 2700, 2700, 2800, 2800, 2800, 2900, 2900, 2900];
const MAGIC_ATK_5_STARS = [0, 0, 36, 36, 36, 36, 72, 72, 72, 108, 108, 108, 108, 144, 144, 144, 144, 180, 180, 180, 180, 216, 216, 216, 252, 252, 252, 252, 252, 288, 288, 288, 288, 288, 324, 324, 324, 324, 360, 360, 360, 360, 360, 396, 396, 396, 396, 432, 432, 432, 432, 432, 432, 468, 468, 468, 468, 468, 504, 504, 504, 504, 504, 504, 540, 540, 540, 540, 576, 576, 576, 576, 576, 612, 612, 612, 612, 612, 612, 648, 648, 648, 648, 684, 684, 684, 684, 684, 720, 720, 720, 720, 756, 756, 756, 756, 756, 792, 792, 792, 792, 792, 792, 828, 828, 828, 828, 864, 864, 864, 864, 864, 900, 900, 900, 900, 900, 900, 900, 900, 900, 936, 936, 972, 972, 972, 1008, 1008, 1008, 1044, 1044];
const MAGIC_DEF_5_STARS = [0, 0, 0, 36, 36, 36, 36, 72, 72, 72, 72, 108, 108, 108, 144, 144, 144, 144, 180, 180, 180, 180, 216, 216, 216, 216, 216, 252, 252, 252, 252, 288, 288, 288, 288, 324, 324, 324, 324, 324, 360, 360, 360, 360, 396, 396, 396, 396, 396, 432, 432, 432, 432, 432, 432, 468, 468, 468, 468, 504, 504, 504, 504, 504, 504, 540, 540, 540, 540, 540, 576, 576, 576, 576, 612, 612, 612, 612, 612, 612, 648, 648, 648, 648, 648, 684, 684, 684, 684, 720, 720, 720, 720, 720, 756, 756, 756, 756, 792, 792, 792, 792, 792, 792, 828, 828, 828, 828, 828, 864, 864, 864, 864, 900, 900, 900, 900, 900, 900, 900, 900, 900, 936, 936, 972, 972, 972, 1008, 1008, 1008, 1044];

function test() {
    if (HEARTPHIAL_HP.length - 1 != MAX_HEARTPHIAL) console.log("Test failed on HEARTPHIAL_HP [" + (HEARTPHIAL_HP.length - 1) + "]");
    if (HEARTPHIAL_ATK.length - 1 != MAX_HEARTPHIAL) console.log("Test failed on HEARTPHIAL_ATK [" + (HEARTPHIAL_ATK.length - 1) + "]");
    if (HEARTPHIAL_DEF.length - 1 != MAX_HEARTPHIAL) console.log("Test failed on HEARTPHIAL_DEF [" + (HEARTPHIAL_DEF.length - 1) + "]");
    if (HEARTPHIAL_HP_NO_PORTRAIT.length - 1 != MAX_HEARTPHIAL) console.log("Test failed on HEARTPHIAL_HP_NO_PORTRAIT [" + (HEARTPHIAL_HP_NO_PORTRAIT.length - 1) + "]");
    if (HEARTPHIAL_ATK_NO_PORTRAIT.length - 1 != MAX_HEARTPHIAL) console.log("Test failed on HEARTPHIAL_ATK_NO_PORTRAIT [" + (HEARTPHIAL_ATK_NO_PORTRAIT.length - 1) + "]");
    if (HEARTPHIAL_DEF_NO_PORTRAIT.length - 1 != MAX_HEARTPHIAL) console.log("Test failed on HEARTPHIAL_DEF_NO_PORTRAIT [" + (HEARTPHIAL_DEF_NO_PORTRAIT.length - 1) + "]");
    if (MAGIC_HP.length - 1 != MAX_MAGIC) console.log("Test failed on MAGIC_HP [" + (MAGIC_HP.length - 1) + "]");
    if (MAGIC_ATK.length - 1 != MAX_MAGIC) console.log("Test failed on MAGIC_ATK [" + (MAGIC_ATK.length - 1) + "]");
    if (MAGIC_DEF.length - 1 != MAX_MAGIC) console.log("Test failed on MAGIC_DEF [" + (MAGIC_DEF.length - 1) + "]");
    if (MAGIC_HP_5_STARS.length - 1 != MAX_MAGIC) console.log("Test failed on MAGIC_HP_5_STARS [" + (MAGIC_HP_5_STARS.length - 1) + "]");
    if (MAGIC_ATK_5_STARS.length - 1 != MAX_MAGIC) console.log("Test failed on MAGIC_ATK_5_STARS [" + (MAGIC_ATK_5_STARS.length - 1) + "]");
    if (MAGIC_DEF_5_STARS.length - 1 != MAX_MAGIC) console.log("Test failed on MAGIC_DEF_5_STARS [" + (MAGIC_DEF_5_STARS.length - 1) + "]");    
}

function toggle_support(tag, target_tag) {
    if (document.getElementById(tag).checked) {
        document.getElementById(target_tag).style.display = "inline";
    } else {
        document.getElementById(target_tag).style.display = "none";
    }
}

function get_stat_at_level(min_stat, max_stat, level, max_level) {
    return Math.floor(min_stat + (level - 1) / (max_level - 1) * (max_stat - min_stat));
}

function submit() {
    // Extract data from page
    var min_hp  = parseInt(document.getElementById("min_hp").value) || 0;
    var min_atk = parseInt(document.getElementById("min_atk").value) || 0;
    var min_def = parseInt(document.getElementById("min_def").value) || 0;
    var max_hp  = parseInt(document.getElementById("max_hp").value) || 0;
    var max_atk = parseInt(document.getElementById("max_atk").value) || 0;
    var max_def = parseInt(document.getElementById("max_def").value) || 0;
    var level   = parseInt(document.getElementById("level").value) || 1;
    if (level < 1) level = 1;
    if (level > MAX_LEVEL) level = MAX_LEVEL;
    var mlevel  = parseInt(document.getElementById("mlevel").value) || 0;
    if (mlevel < 0) mlevel = 0;
    if (mlevel > MAX_MAGIC) mlevel = MAX_MAGIC;
    var hlevel  = parseInt(document.getElementById("hlevel").value) || 1;
    if (hlevel < 1) hlevel = 1;
    if (hlevel > MAX_HEARTPHIAL) hlevel = MAX_HEARTPHIAL;
    var has_portrait = document.getElementById("has_personal_portrait").checked;
    var support_hp = 0;
    var support_atk = 0;
    var support_def = 0;
    if (document.getElementById("has_support_kioku").checked) {
        support_hp  = parseInt(document.getElementById("support_hp").value) || 0;
        support_atk = parseInt(document.getElementById("support_atk").value) || 0;
        support_def = parseInt(document.getElementById("support_def").value) || 0;
    }
    var portrait_hp = 0;
    var portrait_atk = 0;
    var portrait_def = 0;
    if (document.getElementById("has_equipped_portrait").checked) {
        portrait_hp  = parseInt(document.getElementById("portrait_hp").value) || 0;
        portrait_atk = parseInt(document.getElementById("portrait_atk").value) || 0;
        portrait_def = parseInt(document.getElementById("portrait_def").value) || 0;
    }


    var rarity    = parseInt(document.getElementById("rarity").value) || 0;
    var ascension = parseInt(document.getElementById("ascension").value) || 0;

    // Calculation
    var curr_hp  = get_stat_at_level(min_hp, max_hp, level, MAX_LEVEL);
    var curr_atk = get_stat_at_level(min_atk, max_atk, level, MAX_LEVEL);
    var curr_def = get_stat_at_level(min_def, max_def, level, MAX_LEVEL);

    var final_hp  = Math.floor(curr_hp  * (1 + 0.02 * ascension) + 0.16 * support_hp  + portrait_hp  + ((rarity == 5)? MAGIC_HP_5_STARS[mlevel]  : MAGIC_HP[mlevel] ) + ((has_portrait)? HEARTPHIAL_HP[hlevel]  : HEARTPHIAL_HP_NO_PORTRAIT[hlevel] ));
    var final_atk = Math.floor(curr_atk * (1 + 0.02 * ascension) + 0.16 * support_atk + portrait_atk + ((rarity == 5)? MAGIC_ATK_5_STARS[mlevel] : MAGIC_ATK[mlevel]) + ((has_portrait)? HEARTPHIAL_ATK[hlevel] : HEARTPHIAL_ATK_NO_PORTRAIT[hlevel]));
    var final_def = Math.floor(curr_def * (1 + 0.02 * ascension) + 0.16 * support_def + portrait_def + ((rarity == 5)? MAGIC_DEF_5_STARS[mlevel] : MAGIC_DEF[mlevel]) + ((has_portrait)? HEARTPHIAL_DEF[hlevel] : HEARTPHIAL_DEF_NO_PORTRAIT[hlevel]));

    document.getElementById("final_hp").innerHTML = final_hp;
    document.getElementById("final_atk").innerHTML = final_atk;
    document.getElementById("final_def").innerHTML = final_def;
}