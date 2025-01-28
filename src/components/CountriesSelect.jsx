import Check from "@mui/icons-material/Check";
import Chip from "@mui/joy/Chip";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator, {
  listItemDecoratorClasses,
} from "@mui/joy/ListItemDecorator";
import Option, { optionClasses } from "@mui/joy/Option";
import Select from "@mui/joy/Select";
import Typography from "@mui/joy/Typography";
import * as React from "react";

export default function CountriesSelect() {
  const countries = {
    "الدول العربية": [
      {
        name: "الجزائر",
        states: ["الجزائر", "وهران", "قسنطينة", "عنابة", "تلمسان"],
      },
      { name: "البحرين", states: ["المنامة", "الرفاع", "المحرق", "سترة"] },
      {
        name: "مصر",
        states: ["القاهرة", "الإسكندرية", "الجيزة", "الشرقية", "الدقهلية"],
      },
      {
        name: "السعودية",
        states: ["الرياض", "جدة", "مكة", "الدمام", "المدينة المنورة"],
      },
      {
        name: "الإمارات",
        states: ["أبوظبي", "دبي", "الشارقة", "رأس الخيمة", "الفجيرة"],
      },
      {
        name: "العراق",
        states: ["بغداد", "البصرة", "النجف", "كربلاء", "أربيل"],
      },
      { name: "لبنان", states: ["بيروت", "طرابلس", "صيدا", "زحلة"] },
      { name: "الأردن", states: ["عمان", "إربد", "الزرقاء", "المفرق"] },
      { name: "فلسطين", states: ["القدس", "غزة", "الخليل", "رام الله"] },
      // Add more Arab countries
    ],
    "الولايات المتحدة الأمريكية": [
      {
        name: "كاليفورنيا",
        states: ["لوس أنجلوس", "سان فرانسيسكو", "سان دييغو", "سان خوسيه"],
      },
      { name: "نيويورك", states: ["نيويورك", "بافالو", "روتشستر", "سيراكيوز"] },
      { name: "فلوريدا", states: ["ميامي", "أورلاندو", "تامبا", "جاكسونفيل"] },
      { name: "تكساس", states: ["هيوستن", "دالاس", "أوستن", "سان أنطونيو"] },
      {
        name: "إلينوي",
        states: ["شيكاغو", "نورث شيكاغو", "روكفورد", "إلينوي"],
      },
      { name: "فلوريدا", states: ["ميامي", "أورلاندو", "تامبا", "جاكسونفيل"] },
      { name: "واشنطن", states: ["سياتل", "سبوكان", "تاكوما", "بيلينجهام"] },
      // Add more states as needed
    ],
    فرنسا: [
      { name: "باريس", states: ["باريس", "مرسيليا", "ليون", "بوردو", "نيس"] },
      { name: "ألبير", states: ["فرنسا", "سانت إتيان", "نانت", "نيس"] },
      // Add more states in France if necessary
    ],
    "المملكة المتحدة": [
      {
        name: "إنجلترا",
        states: ["لندن", "مانشستر", "برمنغهام", "ليفربول", "نيوكاسل"],
      },
      { name: "اسكتلندا", states: ["إدنبرة", "غلاسكو", "أبردين", "دنفرملين"] },
      { name: "ويلز", states: ["كاردييف", "ساوث ويلز", "نوتنغهام", "لندن"] },
      { name: "أيرلندا الشمالية", states: ["بلفاست", "ديري", "بورتاداون"] },
    ],
    ألمانيا: [
      { name: "برلين", states: ["برلين"] },
      { name: "بافاريا", states: ["ميونيخ", "نورنبرغ", "أوغسبورغ"] },
      { name: "هامبورغ", states: ["هامبورغ"] },
      { name: "شمال الراين-وستفاليا", states: ["كولونيا", "دوسلدورف", "بون"] },
      // Add more states in Germany
    ],
    كندا: [
      { name: "أونتاريو", states: ["تورنتو", "أوتاوا", "هاميلتون"] },
      { name: "كيبك", states: ["مونتريال", "كيبيك", "تروا ريفيير"] },
      { name: "نوفا سكوشا", states: ["هاليفاكس", "سيدني", "دارتماوث"] },
      // Add more provinces as needed
    ],
    // Add other countries and their regions here
  };

  const colors = {
    "الدول العربية": "neutral",
    "الولايات المتحدة الأمريكية": "primary",
    فرنسا: "success",
    "المملكة المتحدة": "warning",
    ألمانيا: "danger",
    كندا: "info",
  };

  return (
    <Select
      placeholder="اختر دولة أو ولاية"
      slotProps={{
        listbox: {
          component: "div",
          sx: {
            maxHeight: 240,
            overflow: "auto",
            "--List-padding": "0px",
            "--ListItem-radius": "0px",
          },
        },
      }}
      sx={{ width: 240 }}
    >
      {Object.entries(countries).map(([region, regionCountries], index) => (
        <React.Fragment key={region}>
          {index !== 0 && <ListDivider role="none" />}
          <List
            aria-labelledby={`select-group-${region}`}
            sx={{ "--ListItemDecorator-size": "28px" }}
          >
            <ListItem id={`select-group-${region}`} sticky>
              <Typography level="body-xs" sx={{ textTransform: "uppercase" }}>
                {region} ({regionCountries.length})
              </Typography>
            </ListItem>
            {regionCountries.map((country) => (
              <Option
                key={country.name}
                value={country.name}
                label={
                  <React.Fragment>
                    <Chip
                      size="sm"
                      color={colors[region]}
                      sx={{ borderRadius: "xs", mr: 1 }}
                    >
                      {region}
                    </Chip>
                    {country.name}
                  </React.Fragment>
                }
                sx={{
                  [`&.${optionClasses.selected} .${listItemDecoratorClasses.root}`]:
                    {
                      opacity: 1,
                    },
                }}
              >
                <ListItemDecorator sx={{ opacity: 0 }}>
                  <Check />
                </ListItemDecorator>
                {country.name}
              </Option>
            ))}
          </List>
        </React.Fragment>
      ))}
    </Select>
  );
}
