import apple from '../assets/icons/Apple.svg';
import center_align from '../assets/icons/center_align.svg';
import check_filled_blue from '../assets/icons/check_filled_blue.svg';
import check_white from '../assets/icons/check_white.svg';
import curly_dotted_line_black from '../assets/icons/curly_dotted_line_black.svg';
import curly_dotted_line_horizontal from '../assets/icons/curly_dotted_line_horizontal.svg';
import curly_dotted_line_long from '../assets/icons/curly_dotted_line_long.svg';
import curly_dotted_line_white from '../assets/icons/curly_dotted_line_white.svg';
import day from '../assets/icons/day.svg';
import delete_white from '../assets/icons/delete_white.svg';
import globe_blue from '../assets/icons/globe_blue.svg';
import instagram from '../assets/icons/instagram.svg';
import language from '../assets/icons/language.svg';
import left_align from '../assets/icons/left_align.svg';
import left_pointer from '../assets/icons/left_pointer.svg';
import linkedin from '../assets/icons/linkedin.svg';
import list_white from '../assets/icons/list_white.svg';
import messages from '../assets/icons/messages.svg';
import microphone_blue from '../assets/icons/microphone_blue.svg';
import microphone_rounded from '../assets/icons/microphone_rounded.svg';
import night from '../assets/icons/night.svg';
import pause from '../assets/icons/pause.svg';
import Playstore from '../assets/icons/Playstore.svg';
import plus_circle from '../assets/icons/plus_circle.svg';
import right_align from '../assets/icons/right_align.svg';
import right_pointer from '../assets/icons/right_pointer.svg';
import search from '../assets/icons/search.svg';
import slack from '../assets/icons/slack.svg';
import star_white from '../assets/icons/star_white.svg';
import stop from '../assets/icons/stop.svg';
import telegram from '../assets/icons/telegram.svg';
import twitter from '../assets/icons/twitter.svg';
import voice_blue from '../assets/icons/voice_blue.svg';
import whatsapp from '../assets/icons/whatsapp.svg';
import X_white from '../assets/icons/X_white.svg';

import down_dotted_line from '../assets/images/down_dotted_line.png';
import person1 from '../assets/images/person1.jpg';
import person2 from '../assets/images/person2.jpg';
import person3 from '../assets/images/person3.jpg';
import person4 from '../assets/images/person4.jpg';
import person5 from '../assets/images/person5.jpg';
import slant_phone from '../assets/images/slant_phone.png';
import speak1 from '../assets/images/speak1.png';
import speak2 from '../assets/images/speak2.png';
import speak3 from '../assets/images/speak3.png';
import speak4 from '../assets/images/speak4.png';
import speak5 from '../assets/images/speak5.png';
import speak_full from '../assets/images/speak_full.png';
import up_arrow_line from '../assets/images/up_arrow_line.png';
import voice1 from '../assets/images/voice1.png';
import voice2 from '../assets/images/voice2.png';
import voice3 from '../assets/images/voice3.png';
import voice4 from '../assets/images/voice4.png';
import notely_voice_logo_white from '../assets/images/notely_voice_logo_white.png';
import notely_voice_logo from '../assets/images/notely_voice_logo.png';

import type { StaticImageData } from 'next/image';
import type React from 'react';

type Asset = string | StaticImageData | React.ComponentType<React.SVGProps<SVGSVGElement>>;

export const icons: Record<string, Asset> = {
  apple,
  center_align,
  check_filled_blue,
  check_white,
  curly_dotted_line_black,
  curly_dotted_line_horizontal,
  curly_dotted_line_long,
  curly_dotted_line_white,
  day,
  delete_white,
  globe_blue,
  instagram,
  language,
  left_align,
  left_pointer,
  linkedin,
  list_white,
  messages,
  microphone_blue,
  microphone_rounded,
  night,
  pause,
  Playstore,
  plus_circle,
  right_align,
  right_pointer,
  search,
  slack,
  star_white,
  stop,
  telegram,
  twitter,
  voice_blue,
  whatsapp,
  X_white,
};

export const images: Record<string, Asset> = {
  down_dotted_line,
  person1,
  person2,
  person3,
  person4,
  person5,
  slant_phone,
  speak1,
  speak2,
  speak3,
  speak4,
  speak5,
  speak_full,
  up_arrow_line,
  voice1,
  voice2,
  voice3,
  voice4,
  notely_voice_logo_white,
  notely_voice_logo,
};

export default { icons, images };

