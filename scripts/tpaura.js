var script = registerScript({
    name: "Ultimate TP Aura",
    version: "Beta",
    authors:  ["me", "you"]
});

settings = {
    targetHUDValue: targetHUD = Setting.list({
        name: "TargetHUD",
        values: ["Health", "Exhibition", "Novoline", "Flux", "Astolfo", "ValuedValueTH", "Smoke", "Moon", "0x01a4", "Dortware Old", "Dortware New"],
        default: "Health",
       
    }),
    posXValue: x = Setting.integer({
        name: "Pos X",
        min: -400,
        max: 400,
        default: 0,
       
    }),
    posYValue: y = Setting.integer({
        name: "Pos Y",
        min: -400,
        max: 400,
        default: 0,
    })
};

var target;
var gettarget;
var show_hp_pos;
var show_hp_pos_smooth;
var Meshow_armor_pos;
var entity;
var getentity;
var Meshow_hp_pos;
var targetOnGround;
var r;
var g;
var b;
var c;
var str = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var AntiBot = Java.type("net.ccbluex.liquidbounce.features.module.modules.misc.AntiBot");
var Fonts = Java.type("net.ccbluex.liquidbounce.ui.font.Fonts");
var Color = Java.type("java.awt.Color");
var ScaledResolution = Java.type("net.minecraft.client.gui.ScaledResolution");
var GL11 = Java.type("org.lwjgl.opengl.GL11");
var Gui = Java.type("net.minecraft.client.gui.Gui");
var EntityUtils = Java.type("net.ccbluex.liquidbounce.utils.EntityUtils");
var EntityPlayer = Java.type("net.minecraft.entity.player.EntityPlayer");
var ESP = Java.type("net.ccbluex.liquidbounce.features.module.modules.render.ESP");
var LiquidBounce = Java.type("net.ccbluex.liquidbounce.LiquidBounce");
var RenderHelper = Java.type("net.minecraft.client.renderer.RenderHelper");
var GlStateManager = Java.type("net.minecraft.client.renderer.GlStateManager");
var EntityLivingBase = Java.type("net.minecraft.entity.EntityLivingBase");
var ResourceLocation = Java.type("net.minecraft.util.ResourceLocation");
var Minecraft = Java.type("net.minecraft.client.Minecraft");
var MovementUtils = Java.type("net.ccbluex.liquidbounce.utils.MovementUtils");
var OpenGlHelper = Java.type("net.minecraft.client.renderer.OpenGlHelper");
var ColorUtils = Java.type("net.ccbluex.liquidbounce.utils.render.ColorUtils");
var MathHelper = Java.type("net.minecraft.util.MathHelper");
var S03PacketTimeUpdate = Java.type("net.minecraft.network.play.server.S03PacketTimeUpdate");
var imperia;
var shondel;
var clareen;
var jarquez = [];
var sanaah = [];
var katonya = [];

function healthColor(drisana, martrell) {
    if (drisana > martrell / 2) {
        var nayella = parseInt((martrell - drisana) * (255 / martrell) * 2);
        nayella = ("0" + nayella.toString(16)).slice(-2);
    } else {
        var nayella = 255;
        nayella = ("0" + nayella.toString(16)).slice(-2);
    }
    if (drisana < martrell / 2) {
        var nancy = 255 - parseInt((martrell / 2 - drisana) * (255 / martrell) * 2);
        nancy = ("0" + nancy.toString(16)).slice(-2);
    } else {
        var nancy = 255;
        nancy = ("0" + nancy.toString(16)).slice(-2);
    }
    var shanetra = 0;
    return "0x84" + nayella + nancy + "00" - 0;
}

function drawFace(latisa, cheyan, sofiah) {
    mc.getTextureManager().bindTexture(latisa.getLocationSkin());
    GL11.glEnable(GL11.GL_BLEND);
    GL11.glColor4f(1, 1, 1, 1);
    Gui.drawScaledCustomSizeModalRect(cheyan, sofiah, 8, 8, 8, 8, 27, 27, 64, 64);
    GL11.glDisable(GL11.GL_BLEND);
}

function drawEntityOnScreen(karaya, taalor, nahiara, barkot) {
    GlStateManager.enableColorMaterial();
    GlStateManager.pushMatrix();
    GlStateManager.translate(karaya, taalor, 50);
    GlStateManager.scale(-nahiara, nahiara, nahiara);
    GlStateManager.rotate(180, 0, 0, 1);
    GlStateManager.rotate(135, 0, 1, 0);
    RenderHelper.enableStandardItemLighting();
    GlStateManager.rotate(-135, 0, 1, 0);
    GlStateManager.translate(0, 0, 0);
    var ariadnna = mc.getRenderManager();
    ariadnna.setPlayerViewY(180);
    ariadnna.setRenderShadow(false);
    ariadnna.renderEntityWithPosYaw(barkot, 0, 0, 0, 0, 1);
    ariadnna.setRenderShadow(true);
    GlStateManager.popMatrix();
    RenderHelper.disableStandardItemLighting();
    GlStateManager.disableRescaleNormal();
    GlStateManager.setActiveTexture(OpenGlHelper.lightmapTexUnit);
    GlStateManager.disableTexture2D();
    GlStateManager.setActiveTexture(OpenGlHelper.defaultTexUnit);
}

function DrawHealthTH(gettarget, scaledWidth, scaledHeight, targetHealth, targetMaxHealth, deshion) {
    GL11.glPushMatrix();
    mc.fontRendererObj.drawString(gettarget.getName(), scaledWidth / 2 - mc.fontRendererObj.getStringWidth(gettarget.getName()) / 2, scaledHeight / 2 - 30, new Color(255, 255, 255).getRGB());
    GL11.glPopMatrix();
    Minecraft.getMinecraft().getTextureManager().bindTexture(new ResourceLocation("textures/gui/icons.png"));
    while (deshion < targetMaxHealth / 2) {
        Minecraft.getMinecraft().ingameGUI.drawTexturedModalRect(scaledWidth / 2 - targetMaxHealth / 2 * 10 / 2 + deshion * 10, scaledHeight / 2 - 16, 16, 0, 9, 9);
        ++deshion;
    }
    deshion = 0;
    while (deshion < targetHealth / 2) {
        Minecraft.getMinecraft().ingameGUI.drawTexturedModalRect(scaledWidth / 2 - targetMaxHealth / 2 * 10 / 2 + deshion * 10, scaledHeight / 2 - 16, 52, 0, 9, 9);
        ++deshion;
    }
}

function DrawExhibitionHUD(gettarget, scaledWidth, scaledHeight, posX, posY, myPing, targetHealth, targetMaxHealth) {
    var Fonts = Java.type("net.ccbluex.liquidbounce.ui.font.Fonts");
    var mcFont = mc.fontRendererObj;
    var aloise = 50;
    var deshelia = aloise + 5;
    var aarie = 50;
    GL11.glPushMatrix();
    drawEntityOnScreen(scaledWidth / 2 + 27 + posX, scaledHeight / 2 + 76 + posY, 17, gettarget);
    Gui.drawRect(scaledWidth / 2 - 3 + posX, scaledHeight / 2 + 29 + posY, scaledWidth / 2 + 157 + posX, scaledHeight / 2 + 91 + posY, new Color(0, 0, 0, 255).getRGB());
    Gui.drawRect(scaledWidth / 2 - 2 + posX, scaledHeight / 2 + 30 + posY, scaledWidth / 2 + 156 + posX, scaledHeight / 2 + 90 + posY, new Color(33, 33, 33, 255).getRGB());
    Gui.drawRect(scaledWidth / 2 + 1 + posX, scaledHeight / 2 + 33 + posY, scaledWidth / 2 + 153 + posX, scaledHeight / 2 + 87 + posY, new Color(18, 18, 18, 255).getRGB());
    Gui.drawRect(scaledWidth / 2 + 6 + posX, scaledHeight / 2 + 38 + posY, scaledWidth / 2 + 48 + posX, scaledHeight / 2 + 82 + posY, new Color(55, 55, 55, 100).getRGB());
    Gui.drawRect(scaledWidth / 2 + 7 + posX, scaledHeight / 2 + 39 + posY, scaledWidth / 2 + 47 + posX, scaledHeight / 2 + 81 + posY, new Color(18, 18, 18, 255).getRGB());
    GL11.glPopMatrix();
    GL11.glPushMatrix();
    mc.fontRendererObj.drawString(gettarget.getName(), scaledWidth / 2 + aarie + posX, scaledHeight / 2 - 10 + aloise + posY, new Color(255, 255, 255, 255).getRGB());
    GL11.glScalef(0.8, 0.8, 0.8);
    mc.fontRendererObj.drawString("HP: " + targetHealth + " | Dist: " + gettarget.getDistanceToEntity(mc.thePlayer).toFixed(1), scaledWidth / 2 + aarie + 133 + posX * 1.25, scaledHeight / 2 + 97 + aloise + posY * 1.25, new Color(255, 255, 255, 255).getRGB());
    GL11.glPopMatrix();
    GL11.glPushMatrix();
    Gui.drawRect(scaledWidth / 2 + aarie + posX, scaledHeight / 2 + aloise + posY, scaledWidth / 2 + posX + 87 + aarie, scaledHeight / 2 + deshelia + posY, new Color(healthColor(targetHealth, targetMaxHealth), 50).getRGB());
    Gui.drawRect(scaledWidth / 2 + aarie + posX, scaledHeight / 2 + aloise + posY, scaledWidth / 2 + posX + Math.round(targetHealth / targetMaxHealth * 86) + aarie, scaledHeight / 2 + deshelia + posY, healthColor(targetHealth, targetMaxHealth));
    Gui.drawRect(scaledWidth / 2 + aarie - 1 + posX, scaledHeight / 2 + aloise + posY, scaledWidth / 2 + aarie + 86 + posX, scaledHeight / 2 + deshelia - 6 + posY, new Color(0, 0, 0, 200).getRGB());
    Gui.drawRect(scaledWidth / 2 + aarie - 1 + posX, scaledHeight / 2 + aloise + 5 + posY, scaledWidth / 2 + aarie + 86 + posX, scaledHeight / 2 + deshelia + 1 + posY, new Color(0, 0, 0, 200).getRGB());
    Gui.drawRect(scaledWidth / 2 + aarie - 1 + posX, scaledHeight / 2 + aloise + posY, scaledWidth / 2 + aarie + posX, scaledHeight / 2 + deshelia + posY, new Color(0, 0, 0, 200).getRGB());
    Gui.drawRect(scaledWidth / 2 + aarie + 86 + posX, scaledHeight / 2 + aloise - 1 + posY, scaledWidth / 2 + aarie + 87 + posX, scaledHeight / 2 + deshelia + 1 + posY, new Color(0, 0, 0, 200).getRGB());
    Gui.drawRect(scaledWidth / 2 + aarie + 7 + posX, scaledHeight / 2 + aloise - 1 + posY, scaledWidth / 2 + aarie + 8 + posX, scaledHeight / 2 + deshelia + 1 + posY, new Color(0, 0, 0, 210).getRGB());
    Gui.drawRect(scaledWidth / 2 + aarie + 14 + posX, scaledHeight / 2 + aloise - 1 + posY, scaledWidth / 2 + aarie + 15 + posX, scaledHeight / 2 + deshelia + 1 + posY, new Color(0, 0, 0, 210).getRGB());
    Gui.drawRect(scaledWidth / 2 + aarie + 21 + posX, scaledHeight / 2 + aloise - 1 + posY, scaledWidth / 2 + aarie + 22 + posX, scaledHeight / 2 + deshelia + 1 + posY, new Color(0, 0, 0, 210).getRGB());
    Gui.drawRect(scaledWidth / 2 + aarie + 28 + posX, scaledHeight / 2 + aloise - 1 + posY, scaledWidth / 2 + aarie + 29 + posX, scaledHeight / 2 + deshelia + 1 + posY, new Color(0, 0, 0, 210).getRGB());
    Gui.drawRect(scaledWidth / 2 + aarie + 35 + posX, scaledHeight / 2 + aloise - 1 + posY, scaledWidth / 2 + aarie + 36 + posX, scaledHeight / 2 + deshelia + 1 + posY, new Color(0, 0, 0, 210).getRGB()), Gui.drawRect(scaledWidth / 2 + aarie + 42 + posX, scaledHeight / 2 + aloise - 1 + posY, scaledWidth / 2 + aarie + 43 + posX, scaledHeight / 2 + deshelia + 1 + posY, new Color(0, 0, 0, 210).getRGB()), Gui.drawRect(scaledWidth / 2 + aarie + 49 + posX, scaledHeight / 2 + aloise - 1 + posY, scaledWidth / 2 + aarie + 50 + posX, scaledHeight / 2 + deshelia + 1 + posY, new Color(0, 0, 0, 210).getRGB()), Gui.drawRect(scaledWidth / 2 + aarie + 56 + posX, scaledHeight / 2 + aloise - 1 + posY, scaledWidth / 2 + aarie + 57 + posX, scaledHeight / 2 + deshelia + 1 + posY, new Color(0, 0, 0, 210).getRGB()), Gui.drawRect(scaledWidth / 2 + aarie + 63 + posX, scaledHeight / 2 + aloise - 1 + posY, scaledWidth / 2 + aarie + 64 + posX, scaledHeight / 2 + deshelia + 1 + posY, new Color(0, 0, 0, 210).getRGB()), Gui.drawRect(scaledWidth / 2 + aarie + 70 + posX, scaledHeight / 2 + aloise - 1 + posY, scaledWidth / 2 + aarie + 71 + posX, scaledHeight / 2 + deshelia + 1 + posY, new Color(0, 0, 0, 210).getRGB()), Gui.drawRect(scaledWidth / 2 + aarie + 78 + posX, scaledHeight / 2 + aloise - 1 + posY, scaledWidth / 2 + aarie + 79 + posX, scaledHeight / 2 + deshelia + 1 + posY, new Color(0, 0, 0, 210).getRGB()), GL11.glPopMatrix();
}

function drawNovolineHUD(laytin, azhar, celesta, monecia, melchior, therman, evanyelin, hommy) {
    GL11.glPushMatrix(), Gui.drawRect(azhar / 2 + 10 + therman, celesta / 2 + 5 + evanyelin, azhar / 2 + 119 + therman, celesta / 2 + 36 + evanyelin, new Color(40, 40, 40).getRGB()), mc.fontRendererObj.drawString(laytin.getName(), azhar / 2 + 43 + therman, celesta / 2 + 10 + evanyelin, new Color(255, 255, 255).getRGB()), Gui.drawRect(azhar / 2 + 42 + therman, celesta / 2 + 21 + evanyelin, azhar / 2 + 116 + therman, celesta / 2 + 32 + evanyelin, new Color(30, 30, 30).getRGB()), monecia > melchior ? Gui.drawRect(azhar / 2 + 42 + therman, celesta / 2 + 21 + evanyelin, monecia - 4, celesta / 2 + 32 + evanyelin, new Color(129, 95, 149).getRGB()) : Gui.drawRect(azhar / 2 + 42 + therman, celesta / 2 + 21 + evanyelin, melchior - 4, celesta / 2 + 32 + evanyelin, new Color(129, 95, 149).getRGB()), Gui.drawRect(azhar / 2 + 42 + therman, celesta / 2 + 21 + evanyelin, monecia - 4, celesta / 2 + 32 + evanyelin, new Color(159, 125, 179).getRGB()), mc.fontRendererObj.drawString(laytin.getHealth().toFixed(1) * 5 + "%", azhar / 2 + 67 + therman, celesta / 2 + 23 + evanyelin, new Color(255, 255, 255).getRGB()), GL11.glPopMatrix(), drawFace(laytin, azhar / 2 + 12 + therman, celesta / 2 + 7 + evanyelin);
}

function drawValuedValue(heartlee, sharlin, trevond, denissa, jermil, kailiyah, jenielle, kaniyha) {
    GL11.glPushMatrix(), Gui.drawRect(sharlin / 2 + kailiyah, trevond / 2 + 5 + jenielle, sharlin / 2 + 140 + kailiyah, trevond / 2 + 34 + jenielle, new Color(15, 15, 15).getRGB()), mc.fontRendererObj.drawString(heartlee.getName(), sharlin / 2 + 5 + kailiyah, trevond / 2 + 9 + jenielle, new Color(255, 255, 255).getRGB());
    if (denissa > jermil) {
        Gui.drawRect(sharlin / 2 + 5 + kailiyah, trevond / 2 + 21 + jenielle, denissa, trevond / 2 + 29 + jenielle, new Color(215, 15, 20).getRGB());
    } else Gui.drawRect(sharlin / 2 + 5 + kailiyah, trevond / 2 + 21 + jenielle, jermil, trevond / 2 + 29 + jenielle, new Color(215, 15, 20).getRGB());
    Gui.drawRect(sharlin / 2 + 5 + kailiyah, trevond / 2 + 21 + jenielle, denissa, trevond / 2 + 29 + jenielle, new Color(255, 55, 50).getRGB()), mc.fontRendererObj.drawString(heartlee.getHealth().toFixed(1), sharlin / 2 - 10, trevond / 2 + trevond / 2.5, new Color(255, 255, 255).getRGB()), GL11.glPopMatrix();
}

function drawDortwareOld(jannete, adeola, danija, cambel, zelpha, mialyn, hermond, yomi) {
    GL11.glPushMatrix(), Gui.drawRect(adeola / 2 - 80 + zelpha, danija / 2 + 20 + mialyn, cambel, danija / 2 + 30 + mialyn, new Color(255, 255, 255, 255).getRGB()), Gui.drawRect(adeola / 2 - 80 + zelpha, danija / 2 + 20 + mialyn, cambel, danija / 2 + 30 + mialyn, new Color(healthColor(hermond, yomi), 255).getRGB()), Gui.drawRect(adeola / 2 - 80 + zelpha, danija / 2 + 20 + mialyn, cambel, danija / 2 + 30 + mialyn, new Color(healthColor(hermond, yomi), 255).getRGB()), Gui.drawRect(adeola / 2 - 80 + zelpha, danija / 2 + 20 + mialyn, cambel, danija / 2 + 30 + mialyn, new Color(healthColor(hermond, yomi), 255).getRGB()), Gui.drawRect(adeola / 2 - 80 + zelpha, danija / 2 + 20 + mialyn, cambel, danija / 2 + 30 + mialyn, new Color(healthColor(hermond, yomi), 255).getRGB()), mc.fontRendererObj.drawString(jannete.getHealth().toFixed(0), adeola / 2 + 65 + zelpha, danija / 2 + 21 + mialyn, new Color(255, 255, 255).getRGB()), mc.fontRendererObj.drawString(jannete.getName(), adeola / 2 - 75 + zelpha, danija / 2 + 21 + mialyn, new Color(255, 255, 255).getRGB()), GL11.glPopMatrix();
}

function drawDortwareNew(janiene, ziggie, kasian, leahana, timbre, iyssis, brisamar, kingarthur, dayzhane) {
    GL11.glPushMatrix(), Gui.drawRect(ziggie / 2 + 20 + timbre, kasian / 2 + 20 + iyssis, ziggie / 2 + 163 + timbre, kasian / 2 + 59 + iyssis, new Color(20, 20, 20, 200).getRGB()), mc.fontRendererObj.drawString("Name: " + janiene.getName(), ziggie / 2 + 52 + timbre, kasian / 2 + 23 + iyssis, new Color(255, 255, 255).getRGB()), mc.fontRendererObj.drawString("Distance: " + dayzhane, ziggie / 2 + 52 + timbre, kasian / 2 + 34 + iyssis, new Color(255, 255, 255).getRGB()), mc.fontRendererObj.drawString("Armor: " + janiene.getTotalArmorValue().toFixed(0), ziggie / 2 + 52 + timbre, kasian / 2 + 45 + iyssis, new Color(255, 255, 255).getRGB()), drawEntityOnScreen(ziggie / 2 + 34 + timbre, kasian / 2 + 52 + iyssis, 15, janiene), Gui.drawRect(ziggie / 2 + 20 + timbre, kasian / 2 + 56 + iyssis, ziggie / 2 + 163 + timbre, kasian / 2 + 59 + iyssis, new Color(20, 20, 20, 220).getRGB()), Gui.drawRect(ziggie / 2 + 20 + timbre, kasian / 2 + 56 + iyssis, leahana, kasian / 2 + iyssis + 59, new Color(healthColor(brisamar, kingarthur)).getRGB()), Gui.drawRect(ziggie / 2 + 20 + timbre, kasian / 2 + 56 + iyssis, leahana, kasian / 2 + iyssis + 59, new Color(healthColor(brisamar, kingarthur)).getRGB()), Gui.drawRect(ziggie / 2 + 20 + timbre, kasian / 2 + 56 + iyssis, leahana, kasian / 2 + iyssis + 59, new Color(healthColor(brisamar, kingarthur)).getRGB()), Gui.drawRect(ziggie / 2 + 20 + timbre, kasian / 2 + 56 + iyssis, leahana, kasian / 2 + iyssis + 59, new Color(healthColor(brisamar, kingarthur)).getRGB()), Gui.drawRect(ziggie / 2 + 20 + timbre, kasian / 2 + 56 + iyssis, leahana, kasian / 2 + iyssis + 59, new Color(healthColor(brisamar, kingarthur)).getRGB()), GL11.glPopMatrix();
}

function drawAstolfoTH(krysten, malani, margrett, frozine, lorrainne, daeson, zoeth, jassmen, inara, tasya) {
    GL11.glPushMatrix(), Gui.drawRect(malani / 2 - 4 + daeson, margrett / 2 + 5 + zoeth, malani / 2 + 177 + daeson, margrett / 2 + 71 + zoeth, new Color(20, 20, 20, 200).getRGB()), mc.fontRendererObj.drawString(krysten.getHealth().toFixed(1), malani / 2, margrett / 2 + margrett / 2.5, new Color(255, 255, 255).getRGB()), mc.fontRendererObj.drawString(krysten.getName(), malani / 2 + 46 + daeson, margrett / 2 + 9 + zoeth, new Color(255, 255, 255).getRGB()), GL11.glScalef(3, 3, 3), mc.fontRendererObj.drawString(Math.round(krysten.getHealth().toFixed(1)) / 2 * 2 + "❤", malani / 2 - 304 + daeson / 3, margrett / 2 - 183 + zoeth + 2, new Color(150, 50, 200, 255).getRGB()), GL11.glPopMatrix(), GL11.glPushMatrix(), drawEntityOnScreen(malani / 2 + 22 + daeson, margrett / 2 + 65 + zoeth, 28, krysten), Gui.drawRect(malani / 2 + 48 + daeson, margrett / 2 + 65 + zoeth, malani / 2 + 170 + daeson, margrett / 2 + 55 + zoeth, new Color(0, 0, 10, 200).getRGB());
    if (frozine > lorrainne) Gui.drawRect(malani / 2 + 48 + daeson, margrett / 2 + 65 + zoeth, frozine + 8, margrett / 2 + zoeth + 55, new Color(53, 10, 80).getRGB());
    else {
        Gui.drawRect(malani / 2 + 48 + daeson, margrett / 2 + 65 + zoeth, lorrainne + 8, margrett / 2 + zoeth + 55, new Color(53, 10, 80).getRGB());
    }
    Gui.drawRect(malani / 2 + 48 + daeson, margrett / 2 + 65 + zoeth, frozine + 4, margrett / 2 + zoeth + 55, new Color(150, 50, 200).getRGB()), GL11.glPopMatrix();
}

function drawSmokeTH(kanya, kaislei, faydell, komeka, kini, raimon, thawng, ayda) {
    GL11.glPushMatrix(), Gui.drawRect(kaislei / 2 + kini, faydell / 2 + 5 + raimon, kaislei / 2 + 158 + kini, faydell / 2 + 52 + raimon, new Color(20, 20, 20).getRGB()), mc.fontRendererObj.drawString(kanya.getName(), kaislei / 2 + 32 + kini, faydell / 2 + 10 + raimon, new Color(255, 255, 255).getRGB()), mc.fontRendererObj.drawString(kanya.getHealth().toFixed(1) + "❤", kaislei / 2 + 32 + kini, faydell / 2 + 19 + raimon, new Color(255, 255, 255).getRGB()), Gui.drawRect(kaislei / 2 + 3 + kini, faydell / 2 + 45 + raimon, kaislei / 2 + 155 + kini, faydell / 2 + 42 + raimon, new Color(healthColor(thawng, ayda), 25).getRGB()), Gui.drawRect(kaislei / 2 + 3 + kini, faydell / 2 + 47 + raimon, komeka, faydell / 2 + raimon + 40, healthColor(thawng, ayda)), Gui.drawRect(kaislei / 2 + 3 + kini, faydell / 2 + 47 + raimon, komeka, faydell / 2 + raimon + 40, healthColor(thawng, ayda)), Gui.drawRect(kaislei / 2 + 3 + kini, faydell / 2 + 47 + raimon, komeka, faydell / 2 + raimon + 40, healthColor(thawng, ayda)), Gui.drawRect(kaislei / 2 + 3 + kini, faydell / 2 + 47 + raimon, komeka, faydell / 2 + raimon + 40, healthColor(thawng, ayda)), Gui.drawRect(kaislei / 2 + 3 + kini, faydell / 2 + 47 + raimon, komeka, faydell / 2 + raimon + 40, healthColor(thawng, ayda)), Gui.drawRect(kaislei / 2 + 3 + kini, faydell / 2 + 47 + raimon, komeka, faydell / 2 + raimon + 40, new Color(255, 255, 255, 120).getRGB()), mc.fontRendererObj.drawString(kanya.getHealth().toFixed(1), kaislei / 2, faydell + 40, new Color(255, 255, 255).getRGB()), drawFace(kanya, kaislei / 2 + 3 + kini, faydell / 2 + 9 + raimon), GL11.glPopMatrix();
}

function drawMoonHUD(clevie, marelli, yuranni, rochely, flavio, aatif, aalim, melanin, macil) {
    GL11.glPushMatrix(), Gui.drawRect(marelli / 2 + 11 + aatif, yuranni / 2 + 5 + aalim, marelli / 2 + 116 + aatif, yuranni / 2 + 34 + aalim, new Color(0, 0, 0, 100).getRGB()), Fonts.font35.drawString(clevie.getName(), marelli / 2 + 41 + aatif, yuranni / 2 + 8 + aalim, new Color(255, 255, 255).getRGB()), Fonts.font35.drawString("Health:" + clevie.getHealth().toFixed(1), marelli / 2 + 41 + aatif, yuranni / 2 + 17 + aalim, new Color(255, 255, 255).getRGB()), Gui.drawRect(marelli / 2 + 41 + aatif, yuranni / 2 + 25 + aalim, marelli / 2 + 114 + aatif, yuranni / 2 + 28 + aalim, new Color(0, 0, 0).getRGB()), Gui.drawRect(marelli / 2 + 41 + aatif, yuranni / 2 + 29 + aalim, marelli / 2 + 114 + aatif, yuranni / 2 + 32 + aalim, new Color(0, 0, 0).getRGB()), Gui.drawRect(marelli / 2 + 42 + aatif, yuranni / 2 + 26 + aalim, rochely - 4, yuranni / 2 + 27 + aalim, healthColor(melanin, macil)), Gui.drawRect(marelli / 2 + 42 + aatif, yuranni / 2 + 26 + aalim, rochely - 4, yuranni / 2 + 27 + aalim, new Color(255, 255, 255, 50).getRGB()), Gui.drawRect(marelli / 2 + 42 + aatif, yuranni / 2 + 30 + aalim, flavio + 42, yuranni / 2 + 31 + aalim, new Color(50, 50, 255).getRGB()), GL11.glPopMatrix(), drawFace(clevie, marelli / 2 + 12 + aatif, yuranni / 2 + 6 + aalim), drawCircle(6, yuranni - 11, 3, new Color(38, 38, 215).getRGB());
}

function draw0x01a4THUD(barba, nzingha, yaniel, taccara, katiemae, kardyn, burce) {
    GL11.glPushMatrix(), Gui.drawRect(nzingha / 2 + 11 + taccara, yaniel / 2 + 5 + katiemae, nzingha / 2 + 130 + taccara, yaniel / 2 + 53 + katiemae, new Color(0, 0, 0, 175).getRGB()), mc.fontRendererObj.drawString(barba.getName(), nzingha / 2 + 15 + taccara, yaniel / 2 + 10 + katiemae, new Color(255, 255, 255).getRGB()), mc.fontRendererObj.drawString("HP: " + kardyn, nzingha / 2 + 15 + taccara, yaniel / 2 + 25 + katiemae, new Color(255, 255, 255).getRGB()), mc.fontRendererObj.drawString("Distance: " + barba.getDistanceToEntity(mc.thePlayer).toFixed(1), nzingha / 2 + 15 + taccara, yaniel / 2 + 40 + katiemae, new Color(255, 255, 255).getRGB()), GL11.glPopMatrix();
}

function drawCircle(tanesha, justi, breania, danniela) {
    var kirill = (danniela >> 24 & 255) / 255;
    var greyleigh = (danniela >> 16 & 255) / 255;
    var latanja = (danniela >> 8 & 255) / 255;
    var schaefer = (danniela & 255) / 255;
    GL11.glColor4f(greyleigh, latanja, schaefer, kirill), GL11.glEnable(GL11.GL_BLEND), GL11.glDisable(GL11.GL_TEXTURE_2D), GL11.glBlendFunc(GL11.GL_SRC_ALPHA, GL11.GL_ONE_MINUS_SRC_ALPHA), GL11.glEnable(GL11.GL_LINE_SMOOTH), GL11.glPushMatrix(), GL11.glLineWidth(1), GL11.glBegin(GL11.GL_POLYGON);
    for (var colman = 0; colman <= 360; colman++) GL11.glVertex2d(tanesha + Math.sin(colman * Math.PI / 180) * breania, justi + Math.cos(colman * Math.PI / 180) * breania);
    GL11.glEnd(), GL11.glPopMatrix(), GL11.glEnable(GL11.GL_TEXTURE_2D), GL11.glDisable(GL11.GL_BLEND), GL11.glDisable(GL11.GL_LINE_SMOOTH), GL11.glColor4f(1, 1, 1, 1);
}

script.registerModule({
    name: "TargetHUDs",
    category: "Render", 
    description: "",
    settings: settings
}, function (mod) {
    mod.on("enable", function() {
        playerInfo = 0;
        myping = 0;
        jarquez = [];
        sanaah = [];
        katonya = [];
        target = null;
        entity = null;
        imperia = 0;
        shondel = [];
        gettarget = null;
        getentity = null;
        show_hp_pos = 0;
        show_hp_pos_smooth = 0;
        Meshow_hp_pos = 0;
        Meshow_armor_pos = 0;
    });
    mod.on("packet", function(data){
        clareen = data.getPacket();
        if (clareen instanceof S03PacketTimeUpdate) shondel.push(Date.now());
    });
    mod.on("attack", function(data){
                var entity = data.getTargetEntity();
        if (entity instanceof EntityPlayer) {
            target = entity;
            gettarget = entity;
        }
    });
    mod.on("render2D", function(){

        if (mc.thePlayer == null) {
            return;
        }
        jarquez = [];
        sanaah = [];
        if (mc.thePlayer.ticksExisted % 40 === 0 || mc.thePlayer.ticksExisted === 0) {
            playerInfo = mc.getNetHandler().getPlayerInfo(mc.thePlayer.getUniqueID());
            myping = playerInfo == null ? "0ms" : playerInfo.getResponseTime() + "ms";
        }
        var scaledWidth = new ScaledResolution(mc).getScaledWidth();
        var scaledHeight = new ScaledResolution(mc).getScaledHeight();
        if (gettarget != null && !gettarget.isDead && gettarget.getDistanceToEntity(mc.thePlayer) < 12) {
            targetOnGround = target.onGround ? "Ground" : "UnGround";
            var targetHealth = gettarget.getHealth().toFixed(1);
            var targetMaxHealth = gettarget.getMaxHealth();
            var targetArmorValue = target.getTotalArmorValue().toFixed(1);
           // Chat.print("asas")
            switch (targetHUD.get()) {
                case "Health":
                    DrawHealthTH(gettarget, scaledWidth, scaledHeight, targetHealth, targetMaxHealth, 0);
                    break;
                case "Exhibition":
                    DrawExhibitionHUD(gettarget, scaledWidth, scaledHeight, x.get() + 13, y.get() - 20, myping, targetHealth, targetMaxHealth);
                    break;
                case "Novoline":
                    show_hp_pos_smooth += (scaledWidth / 2 + x.get() + Math.round(targetHealth / targetMaxHealth * 66) + 55 - show_hp_pos_smooth) * 0.025;
                    show_hp_pos += (scaledWidth / 2 + x.get() + Math.round(targetHealth / targetMaxHealth * 66) + 55 - show_hp_pos) * 0.1;
                    drawNovolineHUD(gettarget, scaledWidth, scaledHeight, show_hp_pos, show_hp_pos_smooth, x.get(), y.get(), targetHealth);
                    break;
                case "ValuedValueTH":
                    show_hp_pos_smooth += (scaledWidth / 2 + x.get() + Math.round(targetHealth / targetMaxHealth * 66) * 2.01 + 2 - show_hp_pos_smooth) * 0.05;
                    show_hp_pos += (scaledWidth / 2 + x.get() + Math.round(targetHealth / targetMaxHealth * 66) * 2.01 + 2 - show_hp_pos) * 0.2;
                    drawValuedValue(gettarget, scaledWidth, scaledHeight, show_hp_pos, show_hp_pos_smooth, x.get(), y.get(), targetHealth);
                    break;
                case "Dortware Old":
                    show_hp_pos += (scaledWidth / 2 + x.get() + Math.round(targetHealth / targetMaxHealth * 66) * 2.42 - 80 - show_hp_pos) * 0.1;
                    drawDortwareOld(gettarget, scaledWidth, scaledHeight, show_hp_pos, x.get(), y.get(), targetHealth, targetMaxHealth);
                    break;
                case "Astolfo":
                    show_hp_pos_smooth += (scaledWidth / 2 + x.get() + Math.round(targetHealth / targetMaxHealth * 66) * 1.8 + 45 - show_hp_pos_smooth) * 0.02;
                    show_hp_pos += (scaledWidth / 2 + x.get() + Math.round(targetHealth / targetMaxHealth * 66) * 1.8 + 45 - show_hp_pos) * 0.15;
                    drawAstolfoTH(gettarget, scaledWidth, scaledHeight, show_hp_pos, show_hp_pos_smooth, x.get(), y.get(), 0, 0, 0);
                    break;
                case "Dortware New":
                    show_hp_pos_smooth += (scaledWidth / 2 + x.get() + Math.round(targetHealth / targetMaxHealth * 66) * 1.8 + 45 - show_hp_pos_smooth) * 0.02;
                    show_hp_pos += (scaledWidth / 2 + x.get() + Math.round(targetHealth / targetMaxHealth * 66) * 2.18 + 20 - show_hp_pos) * 0.15;
                    drawDortwareNew(gettarget, scaledWidth, scaledHeight, show_hp_pos, x.get(), y.get(), targetHealth, targetMaxHealth, target.getDistanceToEntity(mc.thePlayer).toFixed(0));
                    break;
                case "Smoke":
                    show_hp_pos += (scaledWidth / 2 + x.get() + (Math.round(targetHealth / targetMaxHealth * 66) * 2.31 + 3) - show_hp_pos) * 0.05;
                    drawSmokeTH(gettarget, scaledWidth, scaledHeight, show_hp_pos, x.get(), y.get(), targetHealth, targetMaxHealth);
                    break;
                case "Moon":
                    Meshow_armor_pos = scaledWidth / 2 + x.get() + Math.round(targetArmorValue / 20 * 110) / 1.53;
                    show_hp_pos += (scaledWidth / 2 + x.get() + Math.round(targetHealth / targetMaxHealth * 66) * 1.08 + 46 - show_hp_pos) * 0.075;
                    drawMoonHUD(gettarget, scaledWidth, scaledHeight, show_hp_pos, Meshow_armor_pos, x.get(), y.get(), targetHealth, targetMaxHealth);
                    break;
                case "0x01a4":
                    draw0x01a4THUD(gettarget, scaledWidth, scaledHeight, x.get(), y.get(), targetHealth, targetMaxHealth);
                    break;
            }
        }
    })

});
