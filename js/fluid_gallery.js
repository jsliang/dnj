(function() {
  var $, img_info_items;

  img_info_items = {
    '000_117cdac4e563e94a890458a9f463dddd': {
      "path": "https://lh6.googleusercontent.com/-1l2ufUNTVgk/TtRTjLcx09I/AAAAAAAAPhQ/9sY2SsiXUJA/s700/20289602_dPWzJz.jpg",
      "height": 700,
      "width": 484
    },
    '001_e2393e43575127ecfd1082336a5dae54': {
      "path": "https://lh6.googleusercontent.com/-YCL_fueTvHQ/ThUkvLGgO4I/AAAAAAABqMk/dq46sbVMDxE/s700/17914703_nD84DQ-2.jpeg",
      "height": 465,
      "width": 700
    },
    '002_57d91aab11f2ab45de0c149ae49ee63d': {
      "path": "https://lh5.googleusercontent.com/-Q7m7CWJtsMY/UGKKi6QX0EI/AAAAAAAA1YQ/LAaXGPB1pbk/s700/0380_8D19030.jpg",
      "height": 700,
      "width": 464
    },
    '003_e0deaf9a14cfe957c2413fd2a737fae0': {
      "path": "https://lh3.googleusercontent.com/-cePtNKnsXvk/TjXDi9aqHCI/AAAAAAAABpY/D5zJkPjAXN8/s700/%252520002_7S48744.jpg",
      "height": 465,
      "width": 700
    },
    '004_7b97891df1912cce537af6cd23c60deb': {
      "path": "https://lh3.googleusercontent.com/-RlCKCMipyjo/Try9fLHyHwI/AAAAAAABUNk/ysC4i2TqOZ0/s700/_7361893.jpg",
      "height": 700,
      "width": 465
    },
    '005_e7beddb0558e864e40f35b5505d854aa': {
      "path": "https://lh5.googleusercontent.com/-D-3ZFUAINTw/Tv_P0eMImnI/AAAAAAAAWhs/jwxZ9NDHY9w/s700/511_7364424.jpg",
      "height": 477,
      "width": 700
    },
    '006_ae871e2c36c9ebb0e1839db9cb18427c': {
      "path": "https://lh5.googleusercontent.com/-mWY2vIGd_gU/ThUkvB93eHI/AAAAAAAACek/ua3QzVv3fgQ/s700/17914703_nD84DQ-1.jpeg",
      "height": 700,
      "width": 465
    },
    '007_401791632b19c13b04b7b25f834b0a52': {
      "path": "https://lh4.googleusercontent.com/-Xi_Qz8-Mudk/TjXBq6ALQ4I/AAAAAAAABpI/8Cb5SI0TgCA/s700/%252520003_J7S2197.jpg",
      "height": 700,
      "width": 465
    },
    '008_a594b4b21898542db377e62b9c3b25d6': {
      "path": "https://lh4.googleusercontent.com/-wfXXNB_21eQ/Tlqx4qM_bKI/AAAAAAAAEHc/dibqI7GzNMc/s700/16293321_9LiJ9.jpg",
      "height": 395,
      "width": 700
    },
    '009_84e8a8056c0c2c1b461490ded99e6446': {
      "path": "https://lh3.googleusercontent.com/-UlGfT6m_Ygg/TvDQGsl0XWI/AAAAAAAAVEc/288MVYdsJoU/s700/0110_7367858.jpg",
      "height": 465,
      "width": 700
    },
    '010_5ed9bdd6662655d0055c2e6040023861': {
      "path": "https://lh4.googleusercontent.com/-K_aOosIIk4s/Tkw9UfDy2_I/AAAAAAAACyU/Yhdf_zNgZW4/s700/13724014_oSqf5.jpg",
      "height": 476,
      "width": 700
    },
    '011_9c6618073e0a8394e1691eaeea57677a': {
      "path": "https://lh6.googleusercontent.com/-V7LjRRjaXeY/TrgK-ARZlfI/AAAAAAAAKVk/BUE6T2uRdRk/s700/16293321_V6SjDJ1.jpg",
      "height": 465,
      "width": 700
    },
    '012_39440467ef1164b1770daea183322b60': {
      "path": "https://lh5.googleusercontent.com/-zo0xx8XwwPs/TjXKkQXGdKI/AAAAAAAABqU/1prm3vB2G9U/s700/%252520001_J7S8492.jpg",
      "height": 465,
      "width": 700
    },
    '013_70a591e2b2b8bb5bf32523e96eb76bc6': {
      "path": "https://lh3.googleusercontent.com/-RPgzciP0Fi0/TwSbeu2o2mI/AAAAAAABhuw/LwUSJ48gbLU/s700/0106_7362437.jpg",
      "height": 466,
      "width": 700
    },
    '014_d3212944a065904aa4b1e9fef68704a2': {
      "path": "https://lh3.googleusercontent.com/-tGjjLTFXe_o/TjXKj_gyDiI/AAAAAAAABqU/pLCJhLKq4KU/s700/%252520001_J7S9091.jpg",
      "height": 700,
      "width": 465
    },
    '015_8adf38ba0f43bb26b8b3dd8c9d3c0218': {
      "path": "https://lh3.googleusercontent.com/-9n9uz7ySpds/TheRLtvRERI/AAAAAAAACeA/sNE42-KinX0/s700/%252520004_7K03879.jpg",
      "height": 700,
      "width": 463
    },
    '016_bb5cd34a883ab4e45b97b54caa572efe': {
      "path": "https://lh4.googleusercontent.com/-jQ9_2dq2C2c/TjXAJTS9sqI/AAAAAAAAGlA/S9OWHt-7ORE/s700/003_7K03888.jpg",
      "height": 700,
      "width": 463
    },
    '017_efa9c138afb925217d240aa3ee3504c9': {
      "path": "https://lh6.googleusercontent.com/-TVcfLFfSqlI/TjXAKvruljI/AAAAAAAABoo/oh-rDmO4g_Y/s700/%252520003_J7S2850.jpg",
      "height": 700,
      "width": 465
    },
    '018_e48916788eb004fd7aa065c8e4c61b7c': {
      "path": "https://lh5.googleusercontent.com/-vd6lqeLrOL8/TmD2iYSnvEI/AAAAAAAAEd0/R64-7mifrs4/s700/16293321_V6SjDJ.jpg",
      "height": 335,
      "width": 700
    },
    '019_650fa16540cd546a94680f188a6644fb': {
      "path": "https://lh3.googleusercontent.com/-Gs6TMi-22IM/ThjiOrbY3ZI/AAAAAAAABpU/jLiOUvYB9fI/s700/%252520003_7K01963.jpg",
      "height": 449,
      "width": 700
    },
    '020_7f1454a8e200dcbac2c0521bd4b0e42c': {
      "path": "https://lh6.googleusercontent.com/-JwecM7BhqEI/TjXBqfafiJI/AAAAAAAABpE/BCK0_f9ukL8/s700/%252520007_J7S2479.jpg",
      "height": 465,
      "width": 700
    },
    '021_8c382b8f84f19d3e4d8de82b125fc0fe': {
      "path": "https://lh4.googleusercontent.com/-qzvBgfK1oPo/Tj999Tvv8hI/AAAAAAAAEAI/BYDhXPKbOB8/s700/18429052_sJFPXN-2.jpeg",
      "height": 700,
      "width": 461
    },
    '022_5438b1ce0f558330428500687422daae': {
      "path": "https://lh6.googleusercontent.com/-hQLOPi8gV9Q/ThUkvhyiHkI/AAAAAAAACes/SqJAXXB6NXk/s700/17914703_nD84DQ-5.jpeg",
      "height": 700,
      "width": 465
    },
    '023_c36a708dd02475f9623cb4e1b2f641d6': {
      "path": "https://lh3.googleusercontent.com/-RQgP4kUWvCU/TkIL-W7_wTI/AAAAAAAACfI/xxE2mCyhtWU/s700/12440439_XfaVm.jpeg",
      "height": 465,
      "width": 700
    },
    '024_b0a88e46ab961b160fe36a332e8f23c8': {
      "path": "https://lh6.googleusercontent.com/-431ceQ-KbF8/TkVRMz7J5aI/AAAAAAAACts/lvDRGHtjUIo/s700/13759556_gEw3p.jpeg",
      "height": 465,
      "width": 700
    },
    '025_ca6b3d18834faff20a836fede1738388': {
      "path": "https://lh3.googleusercontent.com/--t3VRP137Lw/TlqJ4GX00XI/AAAAAAAAEFc/BINEIkwSTdI/s700/16293321_9LiJ9.jpg",
      "height": 393,
      "width": 700
    },
    '026_be4fd2aa66f64c2248f4a1af009a7ed2': {
      "path": "https://lh5.googleusercontent.com/-1KMzXiqe2sg/TlE1ZNy3rVI/AAAAAAAADNE/Bgtooyj0uQs/s700/18635951_ccQqvh.jpg",
      "height": 463,
      "width": 700
    },
    '027_86d721d1137e595478c82fa4974bdc1d': {
      "path": "https://lh4.googleusercontent.com/-DSfyzSP88xc/Tlva1HmExBI/AAAAAAAAEKo/jbzJUk4xMqw/s700/16293321_9LiJ9.jpg",
      "height": 393,
      "width": 700
    },
    '028_3a7b98819149bd9d71a8cdcfc71cac3d': {
      "path": "https://lh6.googleusercontent.com/-9u3xFIUK1a4/TlwOiJxRxjI/AAAAAAAAEOg/ypJmzAjh_yg/s700/12836193_vNgWtQ.jpg",
      "height": 465,
      "width": 700
    },
    '029_0ca639dc2cf3811d35e176c2a9003d86': {
      "path": "https://lh6.googleusercontent.com/-S7xQOs2iSNk/Tlx3yhtfofI/AAAAAAAAERU/c8kZyOHXtdI/s700/10696817_rN56th.jpg",
      "height": 515,
      "width": 700
    },
    '030_04a8316753b514442fc1941b72d15faa': {
      "path": "https://lh4.googleusercontent.com/-INFpYEBkgg4/Tlx4ANC7h4I/AAAAAAABrI8/0kbdFsWXXzI/s700/10696817_rN56th.jpg",
      "height": 465,
      "width": 700
    },
    '031_e2680d1dcbe1876a75f86e3b80896244': {
      "path": "https://lh6.googleusercontent.com/-OaOgKqq-9r0/TmMJziWgx8I/AAAAAAAAEhA/_EYzYP4bO-s/s700/16293321_9LiJ9.jpg",
      "height": 291,
      "width": 700
    },
    '032_ba75521b014cc25ed10e260c7294381a': {
      "path": "https://lh6.googleusercontent.com/-ni5UI-nogPI/TnIoeRiS1bI/AAAAAAAAFAs/qRCPqPUGMj4/s700/16293321_V6SjDJ.jpg",
      "height": 469,
      "width": 700
    },
    '033_a1b8dcfe7194b0c2793dc88ebebfd160': {
      "path": "https://lh5.googleusercontent.com/-F56pHDdZEhU/TodhmvjvVWI/AAAAAAAAJEQ/twBeUKl1Z4k/s700/14683281_DHd4563.jpg",
      "height": 465,
      "width": 700
    },
    '034_c67b677c090e5f8de9544441579ab176': {
      "path": "https://lh4.googleusercontent.com/-BoFJXIpVsSo/Todhly8FLKI/AAAAAAAAJEM/eGhSBbZcMOY/s700/8507105_z4cdRh1.jpg",
      "height": 465,
      "width": 700
    },
    '035_5cafec530c3e62552537b6c7290627ee': {
      "path": "https://lh4.googleusercontent.com/-dIS1EcJ5U9Y/Toi_-Z1un_I/AAAAAAAAJEw/TOK42TPaJXY/s700/19037295_sL7tPQ.jpg",
      "height": 465,
      "width": 700
    },
    '036_dd3479ec8c8c136463e5d9a6c14a4428': {
      "path": "https://lh5.googleusercontent.com/-LHICT25oxyM/TrgjTX_3CrI/AAAAAAAAKXI/s053-7XL5fg/s700/16293321_V6SjDJ14.jpg",
      "height": 469,
      "width": 700
    },
    '037_7f377641b1b40ed6252f81abf6f2655c': {
      "path": "https://lh5.googleusercontent.com/-LhXUpFZkwvc/TrhQrIg0dnI/AAAAAAAAmqY/xE8ZQb8wZLU/s700/16293321_V6SjDJ11.jpg",
      "height": 465,
      "width": 700
    },
    '038_c721b24584b0054880ddeb1ab01d9cd6': {
      "path": "https://lh3.googleusercontent.com/-4paHIYMhSQo/Trhnj7-bGwI/AAAAAAAAKa4/6MAhsQZgmTQ/s700/16293321_V6SjDJ21.jpg",
      "height": 393,
      "width": 700
    },
    '039_12ad9fd0861707b17b5ec76767172ad9': {
      "path": "https://lh3.googleusercontent.com/-WoJY40vntvY/Trh0TdJNExI/AAAAAAAAKck/Rlq6_wlvwZg/s700/16293321_V6SjDJ19.jpg",
      "height": 509,
      "width": 700
    },
    '040_decf24aecfe705aa74eab26b8881a1b6': {
      "path": "https://lh5.googleusercontent.com/-Zhy64GyYPT8/TrljdQAqwzI/AAAAAAAAKnU/jX0yx8AWyAA/s700/16293321_V6SjDJ2.jpg",
      "height": 393,
      "width": 700
    },
    '041_f18e87d3e77ed4785e19e5a5dd6e90ef': {
      "path": "https://lh4.googleusercontent.com/-sJNGO9P6D9g/TrmBBr9kItI/AAAAAAAAKps/KdF89-Bl-cU/s700/16293321_V6SjDJ17.jpg",
      "height": 469,
      "width": 700
    },
    '042_1ced1f8fcbbb09e48c599bb2a3bb5e49': {
      "path": "https://lh4.googleusercontent.com/-W4emRQCMJvc/TrmeUR8Jt9I/AAAAAAAAKvs/WBoepblI-lQ/s700/16293321_V6SjDJ13.jpg",
      "height": 393,
      "width": 700
    },
    '043_6164b8e06d62556bbdbca0317afffd11': {
      "path": "https://lh3.googleusercontent.com/-01zfaZxtDsk/TriJvj80DqI/AAAAAAAAKes/ImvpHTkERAg/s700/16293321_V6SjDJ5.jpg",
      "height": 465,
      "width": 700
    },
    '044_e4fa88b52765e536d705455be1bead89': {
      "path": "https://lh5.googleusercontent.com/-gLCDD5_kUL0/TrnKG87owUI/AAAAAAAAKxU/15yZthct1E0/s700/16293321_V6SjDJ16.jpg",
      "height": 466,
      "width": 700
    },
    '045_b93662af601c578836a8909d9b73ee8b': {
      "path": "https://lh3.googleusercontent.com/-znF2AeerDcw/TrobOqRSSZI/AAAAAAAAK0c/bhSorqYoJTc/s700/16293321_V6SjDJ20.jpg",
      "height": 469,
      "width": 700
    },
    '046_a2236a6053ed48937eb8c345b49963f3': {
      "path": "https://lh5.googleusercontent.com/-CGllth5Zr8M/TrrtB7hniZI/AAAAAAAALA4/mFXfqWVjCqw/s700/16293321_V6Sj21DJ.jpg",
      "height": 393,
      "width": 700
    },
    '047_d193cbdcd0d7e6cef61e07fea773af18': {
      "path": "https://lh5.googleusercontent.com/-3NiqZyxsYIY/TrthuiPfbmI/AAAAAAAALKo/rt_2SksAinw/s700/16293321_V6SjDJ3.jpg",
      "height": 445,
      "width": 700
    },
    '048_644a55bf0130580940a0384575431e17': {
      "path": "https://lh4.googleusercontent.com/-GrvP0Bbd_w0/TtB5i5vwL_I/AAAAAAAAOg8/9xVFoXkhUsw/s700/16293321_V6SjDJ.jpg",
      "height": 469,
      "width": 700
    },
    '049_e48ef41574809b259c27dae638d90518': {
      "path": "https://lh4.googleusercontent.com/-doAFDC7pe-U/TuYu-Y6EtwI/AAAAAAAATkE/tWkdZ4v0TTI/s700/_7362289.jpg",
      "height": 700,
      "width": 465
    },
    '050_8134fe2a2e1d0980168b77bdc16072b5': {
      "path": "https://lh6.googleusercontent.com/-n-rRs9_rJ3M/TtVvXDcg-1I/AAAAAAAAP6Y/40kdnls01DM/s700/20289602_dPWzJz.jpg",
      "height": 385,
      "width": 700
    },
    '051_bdce804b6ae04bf404a7c479dfdb4b91': {
      "path": "https://lh4.googleusercontent.com/-rDuylg93oQU/T7rHdJW5BfI/AAAAAAAAng4/WJtPWJjfzTk/s700/0030_8D18133.jpg",
      "height": 467,
      "width": 700
    },
    '052_ccda57c97f88c79cb3f53e5a85e9682f': {
      "path": "https://lh6.googleusercontent.com/-bHwpDpu6AEc/TwcwSdY1OgI/AAAAAAAAXks/MP--SFHLzjc/s700/100_7368992.jpg",
      "height": 700,
      "width": 465
    },
    '053_b0dc2365ca284f100b554c30d2123ff6': {
      "path": "https://lh6.googleusercontent.com/-0Hwho9rSMsc/TwumKVuNKyI/AAAAAAAAYSQ/Xf9qCYnrChk/s700/0205_7360487.jpg",
      "height": 700,
      "width": 465
    },
    '054_3876d3fb720392023509540260f5709e': {
      "path": "https://lh4.googleusercontent.com/-gKMfyQOm_MY/Tybt56rKkNI/AAAAAAABqMY/_wzwgHwmDv4/s700/0300_7K03804.jpg",
      "height": 463,
      "width": 700
    },
    '055_9441a353d6faf322f969cda5c217d22b': {
      "path": "https://lh6.googleusercontent.com/-w5YfmbXe36c/UBwSU99OmJI/AAAAAAAAueM/HPr818PdLkM/s700/0150_8D18393.jpg",
      "height": 467,
      "width": 700
    },
    '056_434be6bbdc57ad803f12ebfacacffde8': {
      "path": "https://lh4.googleusercontent.com/-QWQpXvsYx5c/UB79efVMs1I/AAAAAAABJbA/KNGFmFwMhL0/s700/0207_8D19655.jpg",
      "height": 467,
      "width": 700
    },
    '057_3b064a2e75c4b396e94507b96fafef71': {
      "path": "https://lh6.googleusercontent.com/-QD5GfTUsZpM/UDp9GU46LfI/AAAAAAAAzUU/uj_lsd7Gogg/s700/104_8D19782.jpg",
      "height": 700,
      "width": 491
    },
    '058_3943552f4a435fc9d699aa989d9b3a9f': {
      "path": "https://lh5.googleusercontent.com/-ykQkrYro9LA/UEwbTRY3jyI/AAAAAAABi2k/nHMIbh2JhbE/s700/0143_8D12583.jpg",
      "height": 414,
      "width": 700
    },
    '059_694d6aa9ed408a2ef20a7976fbd8a94c': {
      "path": "https://lh5.googleusercontent.com/-uH9Jg2ipx2U/UGiTLXxTy9I/AAAAAAAA1n0/gUFyaQP1-Ys/s700/0001_8D11763.jpg",
      "height": 700,
      "width": 467
    },
    '060_c66f2aa5b791b2f194c1f72245655fe6': {
      "path": "https://lh5.googleusercontent.com/-KBC-gITGjNk/UH2LBuEJ1vI/AAAAAAAA2WE/vcuiWR7PTAI/s700/0215_8D11568.jpg",
      "height": 467,
      "width": 700
    },
    '061_5ea67ef97693151fcc5352e06ecf6bc0': {
      "path": "https://lh5.googleusercontent.com/-ZuL1b67paTI/UOgtMVAjbxI/AAAAAAABHFU/6vEMho5304w/s700/1720_8D17009.jpg",
      "height": 467,
      "width": 700
    },
    '062_bf29d0ebd4f21f69b85bfbc9134ffed3': {
      "path": "https://lh4.googleusercontent.com/-i045x6KJR4A/UQB2Zr-9igI/AAAAAAABHqg/VeQGkeGqRPA/s700/0112_8D10603.jpg",
      "height": 468,
      "width": 700
    },
    '063_c395377df8e1e61e458fe4a32333972c': {
      "path": "https://lh5.googleusercontent.com/-G6n6cr1FXWI/UQlXBK9bM3I/AAAAAAABJgE/2NXLcQ3Sovw/s700/0500_8D18400.jpg",
      "height": 467,
      "width": 700
    },
    '064_12302beb32195d438c4cb622369285bf': {
      "path": "https://lh5.googleusercontent.com/-vzRsrbPH-10/UQ8KOzfWaiI/AAAAAAABKrE/xO9Upu_UdiQ/s700/1016_8D15475.jpg",
      "height": 454,
      "width": 700
    },
    '065_4299d7bab90aef2083177c8004eacc34': {
      "path": "https://lh3.googleusercontent.com/-KmueKyX-dUc/USMLAfuuCRI/AAAAAAABMiE/UtXpYdOwBwI/s700/2200_8D17237.jpg",
      "height": 700,
      "width": 523
    },
    '066_2e087cb2d57335e0432fe7ec13e9e3d4': {
      "path": "https://lh5.googleusercontent.com/-3zJ-iCE4nKM/UY0LbkTVRvI/AAAAAAABg-4/rPT9bnQuKzU/s700/2103_8D16967.jpg",
      "height": 467,
      "width": 700
    },
    '067_b192d2244a7d0f29cc1e593a48263134': {
      "path": "https://lh5.googleusercontent.com/-cDWLvD7ZogY/Ubm5IQOq-aI/AAAAAAABk84/rH9ACON4bYI/s700/8400_8D15650.jpg",
      "height": 467,
      "width": 700
    },
    '068_1931c31d9d4ed9a50ef74a1c74ca3150': {
      "path": "https://lh3.googleusercontent.com/-OFjaGnH_kXo/UcibG2YLVHI/AAAAAAABmTM/cPs0Zf2w-mI/s700/1003_8D17001-X3.jpg",
      "height": 700,
      "width": 467
    },
    '069_89523993dfb4c089c7b5788774d62cc8': {
      "path": "https://lh5.googleusercontent.com/-yHnpV6niuko/UfA-UleOPvI/AAAAAAABrTo/fDQ2QAP4gis/s700/1000_8D14163.jpg",
      "height": 467,
      "width": 700
    }
  };

  $ = jQuery;

  $.fn.extend({
    fixedScrollTopBar: function(option) {
      var scrolltop_bar, slowly_scroll_top;
      if (option == null) {
        option = {
          opacity: 0.7
        };
      }
      scrolltop_bar = $(this).clone();
      $(this).css("opacity", 0);
      scrolltop_bar.css("bottom", 0).css("position", "fixed").css("width", "100%").css("opacity", 0).click(slowly_scroll_top = function() {
        var current_top;
        current_top = $(window).scrollTop();
        if (current_top > 1) {
          $(window).scrollTop(Math.round(current_top * 0.66));
          return setTimeout(slowly_scroll_top, 50);
        } else {
          return $(window).scrollTop(0);
        }
      }).hover((function() {
        return $(this).css("opacity", 1);
      }), (function() {
        return $(this).css("opacity", option.opacity);
      }));
      $(window).scroll(function() {
        if (scrolltop_bar.css("opacity") >= 1) {
          return;
        }
        if ($(window).scrollTop() === 0 && scrolltop_bar.css("opacity") > 0) {
          return scrolltop_bar.css("opacity", 0);
        } else {
          return scrolltop_bar.css("opacity", option.opacity);
        }
      });
      return $("body").append(scrolltop_bar);
    },
    gallery: function(img_info_items, option) {
      var full_image_path, gallery, get_display_image_url, get_large_img_path, img_gallery, img_id, img_info;
      if (option == null) {
        option = {
          min_height: 200,
          margin: 6
        };
      }
      gallery = $(this);
      gallery.css("text-align", "center");
      get_large_img_path = function(img_path) {
        var img_file_name, img_path_prefix, pos_2nd_last_slash, pos_last_slash, screen_dimension_max;
        pos_last_slash = img_path.lastIndexOf("/");
        img_file_name = img_path.substr(pos_last_slash, img_path.length - pos_last_slash);
        pos_2nd_last_slash = img_path.substr(0, pos_last_slash).lastIndexOf("/");
        img_path_prefix = img_path.substr(0, pos_2nd_last_slash);
        if ($(window).width() > $(window).height()) {
          screen_dimension_max = $(window).width() - 5;
        } else {
          screen_dimension_max = $(window).height() - 5;
        }
        return img_path_prefix.concat("/s" + screen_dimension_max).concat(img_file_name);
      };
      get_display_image_url = function(img_path) {
        return "display.html?key=" + encodeURIComponent(get_large_img_path(img_path));
      };
      img_gallery = (function() {
        var _results;
        _results = [];
        for (img_id in img_info_items) {
          img_info = img_info_items[img_id];
          full_image_path = get_display_image_url(img_info.path);
          gallery.append("<a href='" + full_image_path + "' target='_blank'><img id='" + img_id + "' src='" + img_info.path + "' /></a>");
          $("#" + img_id).data("orig_width", img_info.width);
          $("#" + img_id).data("orig_height", img_info.height);
          $("#" + img_id).css("margin", option.margin / 2);
          _results.push($("#" + img_id)._setHeight(option.min_height));
        }
        return _results;
      })();
      gallery._relayout(img_info_items, option);
      return $(window).resize(function() {
        gallery.find("img").each(function() {
          $(this)._setHeight(option.min_height);
          full_image_path = get_display_image_url($(this).attr("src"));
          return $(this).parent().attr("href", full_image_path);
        });
        return gallery._relayout(img_info_items, option);
      });
    },
    _setHeight: function(height) {
      var orig_height, orig_width, width;
      orig_width = $(this).data("orig_width");
      orig_height = $(this).data("orig_height");
      width = height / orig_height * orig_width;
      if (width < orig_width && height < orig_height) {
        return $(this).width(width).height(height);
      }
    },
    _resizeImage: function(ratio) {
      var current_height, current_width, new_height, new_width, orig_height, orig_width;
      orig_width = $(this).data("orig_width");
      orig_height = $(this).data("orig_height");
      current_width = $(this).width();
      current_height = $(this).height();
      new_width = current_width * ratio;
      new_height = current_height * ratio;
      if (new_width < orig_width && new_height < orig_height) {
        return $(this).width(new_width).height(new_height);
      } else {
        return $(this).width(orig_width).height(orig_height);
      }
    },
    _relayout: function(img_info_items, option) {
      var current_total_width, img_id, img_id_list, max_total_width, resize_ratio, row_top, rows, stretch_row;
      max_total_width = $(this).innerWidth() - 10;
      rows = {};
      $(this).find("img").each(function() {
        var top;
        top = $(this).position().top;
        if (rows[top] != null) {
          return rows[top].push($(this).attr("id"));
        } else {
          return rows[top] = [$(this).attr("id")];
        }
      });
      return stretch_row = (function() {
        var _fn, _i, _len, _results;
        _results = [];
        for (row_top in rows) {
          img_id_list = rows[row_top];
          current_total_width = 0;
          _fn = function(img_id) {
            return current_total_width += $("#" + img_id).width();
          };
          for (_i = 0, _len = img_id_list.length; _i < _len; _i++) {
            img_id = img_id_list[_i];
            _fn(img_id);
          }
          resize_ratio = (max_total_width - option.margin * (img_id_list.length - 1)) / current_total_width;
          _results.push((function() {
            var _j, _len1, _results1;
            _results1 = [];
            for (_j = 0, _len1 = img_id_list.length; _j < _len1; _j++) {
              img_id = img_id_list[_j];
              _results1.push((function(img_id) {
                return $("#" + img_id)._resizeImage(resize_ratio);
              })(img_id));
            }
            return _results1;
          })());
        }
        return _results;
      })();
    }
  });

  $(document).ready(function() {
    $("#gallery").gallery(img_info_items);
    return $("#scroll-top-bar").fixedScrollTopBar();
  });

}).call(this);
