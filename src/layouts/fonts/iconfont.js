;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-feiji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M663.1552 888.7168l-231.1872-173.3888 318.5152-437.9776-410.2144 369.2032L139.1104 495.6992 837.824 190.0032 663.1552 888.7168zM313.8048 888.7168V714.048l131.0016 87.3216L313.8048 888.7168z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dingwei" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M787.658752 340.26496c0-152.02304-123.31008-275.28192-275.310592-275.28192-152.044544 0-275.3536 123.25888-275.3536 275.28192 0 50.190336 13.705216 97.127424 37.085184 137.65632l-0.206848 0 238.368768 481.788928 238.507008-481.788928-0.275456 0C773.9904 437.392384 787.658752 390.455296 787.658752 340.26496zM512.310272 421.98016c-63.85664 0-115.657728-51.7632-115.657728-115.61984 0-63.893504 51.801088-115.69152 115.657728-115.69152 63.926272 0 115.687424 51.79904 115.687424 115.69152C627.997696 370.21696 576.236544 421.98016 512.310272 421.98016z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-home" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1024 590.432l-512-397.44-512 397.44 0-162.048 512-397.44 512 397.44zM896 576l0 384-256 0 0-256-256 0 0 256-256 0 0-384 384-288z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-setting" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M963.107653 471.495494c0-7.689123-2.937912-15.376199-8.807596-21.252023-5.869684-5.870708-13.538341-8.804527-21.208021-8.804527l-45.87584 0c-19.014052 0-39.127136-14.833847-44.781926-32.971949l-23.788799-57.792241c-8.940626-16.715707-5.258771-41.379433 8.104585-54.810327l32.556487-32.508391c5.430686-5.435803 8.807596-12.94687 8.807596-21.251 0-8.30413-3.333932-15.817244-8.807596-21.271466l-55.255465-55.163367c-5.430686-5.435803-12.922311-8.78406-21.208021-8.78406-8.281617 0-15.817244 3.373841-21.246907 8.78406l-32.556487 32.55137c-13.364379 13.411451-38.119179 17.09433-54.860469 8.108678l-57.748239-23.768333c-18.051121-5.611811-32.948413-25.76378-32.948413-44.757367L583.482543 91.864244c0-7.667633-2.937912-15.356756-8.80862-21.22644-5.869684-5.870708-13.538341-8.807596-21.208021-8.807596l-78.037331 0c-7.713682 0-15.376199 2.936889-21.252023 8.807596-5.870708 5.869684-8.80248 13.558807-8.80248 21.22644l0 45.940308c0 18.993586-14.766308 39.150672-32.909527 44.757367l-57.792241 23.768333c-16.779152 8.983605-41.405015 5.346775-54.771441-8.104585l-32.6844-32.531927c-5.435803-5.434779-12.971429-8.763594-21.252023-8.763594-8.280594 0-15.772218 3.373841-21.208021 8.78406l-55.119365 55.119365c-5.434779 5.435803-8.763594 12.927427-8.807596 21.228487 0 8.284687 3.373841 15.796778 8.807596 21.231557l32.514531 32.57286c13.45136 13.456477 17.131169 38.099736 8.103562 54.815443l-23.792892 57.83215c-5.606695 18.143219-25.719778 32.973996-44.732807 32.973996l-45.921889-0.045025c-7.712659 0-15.382339 2.937912-21.252023 8.807596-5.869684 5.870708-8.807596 13.558807-8.807596 21.246907l0 78.013795c0 7.688099 2.937912 15.382339 8.807596 21.252023 5.869684 5.850242 13.538341 8.783037 21.252023 8.783037l45.921889 0c19.013029 0.045025 39.081087 14.873756 44.692898 32.973996l23.831778 57.788148c8.940626 16.758686 5.303796 41.497113-8.103562 54.858422l-32.601512 32.509415c-5.430686 5.430686-8.807596 12.947893-8.807596 21.271466 0 8.280594 3.37691 15.816221 8.807596 21.252023l55.255465 55.163367c5.430686 5.430686 12.922311 8.78406 21.208021 8.78406 8.280594 0 15.817244-3.353374 21.246907-8.78406l32.601512-32.531927c13.361309-13.386892 37.987173-17.067724 54.67832-7.995091l57.924247 23.768333c18.143219 5.630231 32.909527 25.738198 32.909527 44.756343l0 45.763276c0 7.689123 2.936889 15.376199 8.807596 21.246907 5.869684 5.850242 13.538341 8.78713 21.245883 8.78713l77.993329 0c7.713682 0 15.382339-2.936889 21.252023-8.78713 5.870708-5.870708 8.80862-13.558807 8.80862-21.246907l0-45.763276c0-19.017122 14.897292-39.126112 32.952506-44.756343l57.837266-23.768333c16.73515-9.071609 41.447994-5.3918 54.899354 7.995091l32.381501 32.509415c5.435803 5.454222 12.922311 8.851599 21.252023 8.851599 8.281617 0.019443 15.817244-3.327792 21.246907-8.78406l55.255465-55.206346c5.473665-5.455245 8.807596-12.971429 8.807596-21.275559 0-8.29799-3.37691-15.816221-8.807596-21.245883l-32.556487-32.509415c-13.364379-13.361309-17.045211-38.099736-8.104585-54.858422l23.793916-57.788148c5.649674-18.10024 25.851784-32.927947 44.781926-32.927947l45.871747 0c7.668657 0 15.338337-2.932796 21.208021-8.807596 5.869684-5.870708 8.807596-13.558807 8.807596-21.253046L963.107653 471.495494 963.107653 471.495494 963.107653 471.495494zM705.52511 509.421268c0 106.060571-85.948511 191.960986-191.987592 191.960986-106.0882 0-192.036711-85.899392-192.036711-191.960986 0-106.033965 85.948511-191.982476 192.036711-191.982476C619.576599 317.437769 705.52511 403.387303 705.52511 509.421268"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-menu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M76.2094 308.67l871.1126 0c33.93 0 61.452-27.028 61.452-60.37 0-33.338-27.522-60.366-61.452-60.366l-871.1126 0c-33.929 0-61.4508 27.028-61.4508 60.366 0 33.342 27.5218 60.37 61.4508 60.37"  ></path>' +
    '' +
    '<path d="M76.2094 569.276l871.1126 0c33.93 0 61.452-27.032 61.452-60.37 0-33.34-27.522-60.396-61.452-60.396l-871.1126 0c-33.929 0-61.4508 27.056-61.4508 60.396 0 33.338 27.5218 60.37 61.4508 60.37"  ></path>' +
    '' +
    '<path d="M76.2094 829.8782l871.1126 0c33.93 0 61.452-27.0522 61.452-60.3942 0-33.34-27.522-60.394-61.452-60.394l-871.1126 0c-33.929 0-61.4508 27.054-61.4508 60.394 0 33.342 27.5218 60.3942 61.4508 60.3942"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-liebiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M 63.6747 150.312 c 0 22.5127 18.4195 40.9322 40.9322 40.9322 l 46.0488 0 c 22.5127 0 40.9322 -18.4195 40.9322 -40.9322 l 0 -46.0488 c 0 -22.5127 -18.4195 -40.9322 -40.9322 -40.9322 l -46.0488 0 c -22.5127 0 -40.9322 18.4195 -40.9322 40.9322 L 63.6747 150.312 Z"  ></path>' +
    '' +
    '<path d="M 283.631 106.822 c -11.2564 0 -20.4661 9.20976 -20.4661 20.4661 l 0 0 c 0 11.2564 9.20976 20.4661 20.4661 20.4661 l 654.916 0 c 11.2564 0 20.4661 -9.20976 20.4661 -20.4661 l 0 0 c 0 -11.2564 -9.20976 -20.4661 -20.4661 -20.4661 L 283.631 106.822 Z"  ></path>' +
    '' +
    '<path d="M 63.6747 534.464 c 0 22.5127 18.4195 40.9322 40.9322 40.9322 l 46.0488 0 c 22.5127 0 40.9322 -18.4195 40.9322 -40.9322 l 0 -46.0488 c 0 -22.5127 -18.4195 -40.9322 -40.9322 -40.9322 l -46.0488 0 c -22.5127 0 -40.9322 18.4195 -40.9322 40.9322 L 63.6747 534.464 Z"  ></path>' +
    '' +
    '<path d="M 263.165 511.439 c 0 11.2564 9.20976 20.4661 20.4661 20.4661 l 654.916 0 c 11.2564 0 20.4661 -9.20976 20.4661 -20.4661 l 0 0 c 0 -11.2564 -9.20976 -20.4661 -20.4661 -20.4661 l -654.916 0 C 272.375 490.973 263.165 500.183 263.165 511.439 L 263.165 511.439 Z"  ></path>' +
    '' +
    '<path d="M 63.6747 919.056 c 0 22.5127 18.4195 40.9322 40.9322 40.9322 l 46.0488 0 c 22.5127 0 40.9322 -18.4195 40.9322 -40.9322 l 0 -46.0488 c 0 -22.5127 -18.4195 -40.9322 -40.9322 -40.9322 l -46.0488 0 c -22.5127 0 -40.9322 18.4195 -40.9322 40.9322 L 63.6747 919.056 Z"  ></path>' +
    '' +
    '<path d="M 263.164 896.031 c 0 11.2564 9.20976 20.4661 20.4661 20.4661 l 654.916 0 c 11.2564 0 20.4661 -9.20976 20.4661 -20.4661 l 0 0 c 0 -11.2564 -9.20976 -20.4661 -20.4661 -20.4661 l -654.916 0 C 272.374 875.565 263.164 884.775 263.164 896.031 L 263.164 896.031 Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-user" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M576 706.62144l0-52.77696c70.49216-39.7312 128-138.77248 128-237.83424 0-159.06816 0-288.01024-192-288.01024s-192 128.94208-192 288.01024c0 99.06176 57.50784 198.10304 128 237.83424l0 52.77696c-217.10848 17.75616-384 124.416-384 253.37856l896 0c0-128.96256-166.89152-235.64288-384-253.37856z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fanhui" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M801.009811 416.939971c51.912323 30.944779 115.608018 114.424052 142.109602 214.915791 26.501584 100.489692 22.107507 190.477192 22.107507 190.477192s-34.30941-55.416124-48.220235-74.841545-72.528873-91.801822-163.516144-133.751237S510.41848 579.261916 510.41848 579.261916l0 174.679391-419.146219-296.895921 419.146219-296.894897 0 176.285982c0 0 100.689237 7.577582 153.318898 18.476817C752.385371 373.271402 801.009811 416.939971 801.009811 416.939971z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiahao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M867.370195 418.272315l-261.312494 0 0-261.21835c0-51.644217-41.908482-93.592608-93.592608-93.592608-51.683103 0-93.591585 41.948391-93.591585 93.592608l0 261.21835-261.488503 0c-51.691289 0-93.592608 41.948391-93.592608 93.591585 0 51.732222 41.901319 93.592608 93.592608 93.592608l261.488503 0 0 261.488503c0 51.732222 41.909505 93.592608 93.591585 93.592608 51.685149 0 93.592608-41.860387 93.592608-93.592608l0-261.488503 261.312494 0c51.684126 0 93.591585-41.860387 93.591585-93.592608C960.96178 460.22173 919.055344 418.272315 867.370195 418.272315z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jobs" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M643.18 77.036c-0.166 41.425-34.327 96.659-55.040 117.371s-55.427 20.714-83.044 20.714-62.331 0-83.044-20.714-54.889-75.947-55.040-117.371c-0.193-48.33 84.287-55.233 138.084-55.233s138.277 6.905 138.084 55.233zM434.948 248.425l-48.345 549.878c-3.687 41.978 10.219 83.596 38.415 114.913l80.089 88.981 83.306-87.696c30.406-31.994 45.374-75.642 41.039-119.567l-54.061-546.661c-0.718-7.056-6.669-12.441-13.767-12.441h-112.925c-7.153 0-13.131 5.468-13.753 12.594z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sort" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M451.9 813.869h-97.697v-409.166h-119.325l217.021-218.018v627.183z"  ></path>' +
    '' +
    '<path d="M572.588 210.532h97.697v407.104h119.325l-217.022 218.017v-625.12z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-right" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M51.2 512C51.2 257.501288 257.501288 51.2 512 51.2s460.8 206.301288 460.8 460.8c0 254.498712-206.301288 460.8-460.8 460.8S51.2 766.498712 51.2 512zM0 512c0 282.771525 229.228475 512 512 512 282.771525 0 512-229.228475 512-512 0-282.771525-229.228475-512-512-512C229.228475 0 0 229.228475 0 512zM704.104136 369.23878c-13.876068-14.014915-36.334644-14.014915-50.453695 0L452.833627 573.144949l-83.230373-83.863864c-13.624407-14.014915-36.334644-14.014915-49.950373 0-13.624407 14.023593-13.624407 36.707797 0.503322 50.471051l105.697627 107.320407 1.770305 2.030644c14.119051 13.763254 36.325966 13.763254 50.445017 0l226.034983-228.890034C718.231864 405.937898 718.231864 383.505356 704.104136 369.23878z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-users" viewBox="0 0 1031 1024">' +
    '' +
    '<path d="M516.906704 538.837376c73.803296-44.920095 123.092528-126.121332 123.092528-218.836736 0-141.385154-114.615358-256.000512-256.000512-256.000512S127.999232 178.615486 127.999232 319.999616c0 92.715404 49.289232 173.917665 123.092528 218.836736C123.185706 593.937448 27.304291 726.272027 4.956877 887.390486c-5.326518 38.399667 24.656391 72.609386 63.423652 72.609386l631.238431 0c38.76726 0 68.750169-34.210743 63.423652-72.609386C740.695197 726.272027 644.813782 593.937448 516.906704 538.837376z"  ></path>' +
    '' +
    '<path d="M1012.502217 750.570041c-28.498201-98.752533-107.602417-178.870446-210.594047-216.07006 56.953397-40.613418 94.092598-107.21844 94.092598-182.500301 0-123.71201-100.288438-224.000448-224.000448-224.000448-10.332543 0-20.496137 0.714708-30.456992 2.069376 39.243391 53.124898 62.456032 118.813498 62.456032 189.931008 0 79.972514-29.352164 153.076461-77.850917 209.16668 93.564247 68.827989 163.257462 176.375113 191.737232 302.83332l133.029832 0C993.369963 832.00064 1024.272367 791.359576 1012.502217 750.570041z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gantanhao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 1024C229.239467 1024 0 794.760533 0 512 0 229.239467 229.239467 0 512 0 794.760533 0 1024 229.239467 1024 512 1024 794.760533 794.760533 1024 512 1024ZM512 68.266667C266.922667 68.266667 68.266667 266.922667 68.266667 512 68.266667 757.077333 266.922667 955.733333 512 955.733333 757.077333 955.733333 955.733333 757.077333 955.733333 512 955.733333 266.922667 757.077333 68.266667 512 68.266667ZM512 819.2C474.282667 819.2 443.733333 788.650667 443.733333 750.933333 443.733333 713.216 474.282667 682.666667 512 682.666667 549.717333 682.666667 580.266667 713.216 580.266667 750.933333 580.266667 788.650667 549.717333 819.2 512 819.2ZM512 614.4C493.1584 614.4 477.866667 583.850667 477.866667 546.133333 477.866667 546.133333 443.733333 238.933333 443.733333 238.933333 443.733333 201.216 474.282667 170.666667 512 170.666667 549.717333 170.666667 580.266667 201.216 580.266667 238.933333 580.266667 238.933333 546.133333 546.133333 546.133333 546.133333 546.133333 583.850667 530.8416 614.4 512 614.4Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shaixuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M875.927081 203.408713c0-34.297131-27.900443-62.198597-62.194504-62.198597L210.270493 141.210116c-34.296107 0-62.198597 27.90249-62.198597 62.198597 0 13.729699 4.634554 27.140127 13.08911 37.983079l-0.453325 0.416486 6.363941 6.596232c1.462305 1.51654 197.48991 199.36563 209.848379 211.838709-0.004093 52.400441-0.01842 222.37467 0 223.606731l0.060375 4.03285 53.949726 0L430.930101 438.845886l-1.187035-1.197268c-1.934049-1.949398-194.319707-195.890482-220.958414-222.930325l0.232291-0.711198-4.542456-3.885494c-2.1295-1.821485-3.302209-4.206812-3.302209-6.716982 0-5.016247 4.081968-9.098215 9.099239-9.098215l603.456968 0c5.008061 0 9.081843 4.080945 9.081843 9.098215 0 2.51938-1.167592 4.904707-3.287883 6.715959l-4.981455 4.259 0.320295 0.753153c-27.163663 27.688619-213.603913 214.594473-221.62561 222.635613l-1.329275 1.332345L591.906399 856.367095l53.30402-0.025583-0.016373-4.108574c-0.007163-1.544169-0.002047-257.93763-0.001023-354.459964l0.001023-37.257555 211.632002-211.996299 6.78452-6.782473-0.620124-0.539282C871.34574 230.387158 875.927081 217.047338 875.927081 203.408713z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-biyan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M207.955262 723.450876l45.534056-45.534056c-12.426007-9.740852-24.054859-19.512403-34.778084-29.003568-53.656037-47.489594-93.714382-95.574752-113.462145-120.922047 19.753903-25.355481 59.811224-73.437569 113.462145-120.92307 69.540819-61.549821 177.050392-134.919852 294.311049-134.919852 42.253336 0 83.239819 9.528004 121.640408 24.595164l48.878221-48.878221c-57.631582-26.338878-114.907053-39.677675-170.518628-39.677675-61.444421 0-124.920104 16.281825-188.661847 48.39215-49.864688 25.119097-100.04967 59.97086-149.163251 103.588263C92.290963 433.79587 41.190121 506.648109 39.055504 509.712911c-7.649214 10.983145-7.649214 25.569352 0 36.553521 2.134617 3.065825 53.235458 75.91704 136.142703 149.546991C186.068789 705.467293 196.99463 714.666816 207.955262 723.450876z"  ></path>' +
    '' +
    '<path d="M986.991108 509.712911c-2.134617-3.065825-53.235458-75.91704-136.142703-149.546991-20.149922-17.894555-40.479947-34.299177-60.894905-49.167816l128.168078-128.168078-45.227064-45.227064L169.326477 841.169975l45.227064 45.227064 94.836949-94.836949c4.991688 2.709715 9.982352 5.329379 14.969946 7.841595 63.742766 32.110325 127.217427 48.391127 188.661847 48.391127 61.444421 0 124.920104-16.280802 188.661847-48.391127 49.864688-25.120121 100.04967-59.97086 149.163251-103.588263 82.907245-73.628928 134.008087-146.481166 136.142703-149.546991C994.640322 535.283286 994.640322 520.697079 986.991108 509.712911zM656.933927 527.990183c0 79.353302-64.558341 143.911644-143.911644 143.911644-24.281009 0-47.170323-6.053879-67.25373-16.718777L640.21515 460.735429C650.880047 480.81986 656.933927 503.709173 656.933927 527.990183zM807.334355 648.913253c-69.540819 61.548798-177.051415 134.919852-294.311049 134.919852-55.158251 0-108.151185-16.244986-156.056242-39.847543l42.172495-42.172495c32.730449 21.518083 71.870888 34.04949 113.88477 34.04949 114.621551 0 207.872375-93.250824 207.872375-207.872375 0-42.013883-12.531408-81.153298-34.04949-113.88477l57.218166-57.218166c23.433712 16.490579 44.711318 33.752732 63.271022 50.178843 53.651944 47.485501 93.707219 95.567589 113.462145 120.92307C901.041574 553.345664 860.986299 601.426729 807.334355 648.913253z"  ></path>' +
    '' +
    '<path d="M513.023306 384.078539c10.620895 0 20.972661 1.166569 30.943756 3.360538l50.634214-50.634214c-25.059745-10.733459-52.635801-16.687054-81.578993-16.687054-114.620527 0-207.872375 93.250824-207.872375 207.872375 0 28.942169 5.952572 56.518225 16.687054 81.578993l50.634214-50.634214c-2.193968-9.971096-3.360538-20.323884-3.360538-30.943756C369.111662 448.63688 433.670004 384.078539 513.023306 384.078539z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-box" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M992 253.952 32 253.952C14.336 253.952 0 239.616 0 221.952L0 96C0 78.336 14.336 64 32 64L992 64C1009.664 64 1024 78.336 1024 96L1024 221.952C1024 239.616 1009.664 253.952 992 253.952ZM96 320 928 320C945.664 320 960 334.336 960 352L960 928C960 945.664 945.664 960 928 960L96 960C78.336 960 64 945.664 64 928L64 352C64 334.336 78.336 320 96 320ZM320 576 704 576 704 448 320 448 320 576Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wangge" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M0 106.666v896h1024v-896h-1024zM640 170.666v192h-256v-192h256zM384 426.666h256v192h-256v-192zM320 618.666h-256v-192h256v192zM320 170.666v192h-256v-192h256zM64 938.666v-256h256v256h-256zM384 938.666v-256h256v256h-256zM960 938.666h-256v-256h256v256zM960 618.666h-256v-192h256v192zM960 362.666h-256v-192h256v192z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gongju" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C229.23008 0 0 229.23008 0 512s229.23008 512 512 512 512-229.23008 512-512S794.76992 0 512 0zM413.09056 647.2064c-135.88864 0-246.04928-107.48928-246.04928-240.07552 0-36.38144 5.00736-56.54016 13.31968-78.07744 8.31872-21.53728 23.3088-9.33248 33.2416 0.59648 9.92896 9.92768 77.98784 80.87296 77.98784 80.87296 10.94528 11.35744 29.19808 11.68256 40.54912 0.73088l82.52032-79.57376c11.35744-10.94656 11.69408-29.19296 0.7424-40.54912 0 0-65.52704-68.45312-79.168-82.0928-13.63968-13.63968-20.42368-22.6112 5.7152-30.86976 26.13248-8.26752 36.24576-11.11424 71.14112-11.11424 135.89376 0 246.04928 107.47776 246.04928 240.0768C659.13984 539.71712 548.9856 647.2064 413.09056 647.2064zM858.22208 768.6784c-0.6528 14.42176-15.93984 27.7184-15.93984 27.7184l-56.5184 52.23168c0 0-9.42464 9.59616-26.44608 9.59616s-32.3776-15.39968-32.3776-15.39968S572.92544 683.59808 560.6848 671.37152c-4.2752-3.73632-5.56928-16.256 3.06048-20.5312 8.57216-5.32096 37.0432-21.39648 55.72992-40.08064 15.34336-15.21024 23.87072-27.80928 33.06112-40.4992 6.68288-11.0016 17.1904-8.99968 27.30368 1.1136 12.61056 12.61056 162.95936 167.74144 162.95936 167.74144S858.86336 754.25664 858.22208 768.6784zM766.55104 737.21344c-19.80032 0-35.8528 16.05248-35.8528 35.85152 0 19.80032 16.05248 35.84256 35.8528 35.84256 19.79904 0 35.84-16.04224 35.84-35.84256C802.39104 753.26592 786.35008 737.21344 766.55104 737.21344z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhengyan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M501.955162 195.151511c69.411539 0.127699 132.004442 14.31552 192.062645 39.964913 68.753769 29.355068 129.445647 70.995727 185.423511 119.827275 47.314824 41.293704 90.075859 86.866522 129.584188 135.501704 13.533666 16.663492 12.680734 30.464602 2.140762 45.929412-29.009318 42.602014-62.178485 81.775435-98.122089 118.709308-48.782155 50.131426-102.855379 93.641788-164.400188 127.645816-52.448075 28.968358-108.027181 49.218259-167.689035 57.499407-73.908706 10.265299-145.73568 1.605873-215.660424-23.81824-73.948461-26.908311-138.642372-68.913995-198.084969-119.400809C110.22336 648.644969 59.934118 593.977826 14.162522 535.148424c-12.483162-16.032226-12.680734-25.343398-0.813176-41.968339 53.302212-74.6496 116.786598-139.414588 191.46752-193.209525 49.358005-35.558099 102.580706-63.881939 160.754748-82.597045C411.125158 202.71104 457.867746 195.300894 501.955162 195.151511L501.955162 195.151511zM729.126551 322.380499c62.297751 113.260424 26.708329 240.625544-55.044216 309.244386-85.419671 71.688433-206.108311 79.494927-298.109289 18.705468-55.300819-36.538729-90.908311-87.184565-105.452725-151.650786-14.522729-64.337318-3.487624-124.891859 29.523727-181.966005-88.847059 48.932744-159.783755 117.37088-221.644198 196.083953 28.194936 34.971407 57.521092 68.100819 89.145826 99.171388 28.393713 27.938334 58.433054 53.974438 90.986616 77.156593 58.928188 41.928584 122.671586 72.858202 194.697336 85.440151 45.930616 8.006475 91.802202 8.006475 137.513562-1.18784 67.664715-13.632452 128.079511-43.452536 183.5008-83.359624 65.782965-47.376264 121.383755-105.035896 169.452725-169.968339 2.356405-3.190061 2.376885-5.191078-0.297562-8.134174-18.110344-19.874033-35.607492-40.302231-54.133459-59.770278-41.353939-43.470607-86.391868-82.783774-137.075049-115.439736-7.610127-4.903153-15.376866-9.549704-23.065299-14.314315L729.125346 322.380499zM339.277704 454.81984c1.149289 3.804461 1.921506 9.788235 4.635708 14.761261 4.953751 9.055774 17.259821 12.771087 29.028593 9.888226 11.136301-2.735887 17.397158-11.225449 19.041581-23.153242 1.902231-13.879416 3.586409-28.028687 7.787219-41.314184 16.247868-51.228913 52.389045-79.276875 105.729807-85.973835 15.512998-1.940781 26.115614-13.493911 25.877082-29.057506-0.236122-14.237214-9.332856-23.054456-23.658014-22.440056-5.547671 0.238532-11.096546 1.158927-16.583981 2.081732-32.059633 5.398287-61.623115 16.7936-86.767736 37.637421C361.845459 352.458391 344.866334 399.814174 339.277704 454.81984L339.277704 454.81984z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weibiaoti-" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M547.2 291.2H512c-16 0-28.8 9.6-32 22.4l-28.8 96 134.4-89.6-3.2-6.4c-6.4-12.8-19.2-22.4-35.2-22.4zM457.6 233.6c6.4 9.6 22.4 16 38.4 16h67.2c12.8 0 28.8-6.4 38.4-16l51.2-60.8c6.4-6.4 6.4-12.8 3.2-19.2-3.2-6.4-9.6-9.6-19.2-9.6h-208c-9.6 0-16 3.2-19.2 9.6-3.2 6.4-3.2 12.8 3.2 19.2l44.8 60.8zM665.6 595.2l-22.4-70.4-208 144 70.4 73.6c6.4 6.4 12.8 9.6 19.2 9.6 6.4 0 16-3.2 19.2-9.6l105.6-108.8c16-9.6 19.2-25.6 16-38.4zM614.4 428.8l-217.6 153.6-3.2 16c-3.2 12.8 0 28.8 9.6 38.4l22.4 22.4 214.4-150.4-25.6-80zM406.4 550.4l201.6-140.8-19.2-70.4-147.2 96z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-refresh" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M899.992 548.036c-9.065 46.856-22.03 88.969-38.976 126.252-58.212 127.094-157.6 193.777-298.254 199.963-66.685 2.797-129.639-6.524-188.951-27.961v-0.846l-26.267 66.09c-5.084 9.066-10.761 15.25-16.944 18.642-6.187 3.39-12.033 4.913-17.371 4.659-5.339-0.254-10.762-1.695-16.1-4.236-5.338-2.543-9.066-4.49-11.015-5.932-1.948-1.44-3.559-2.711-4.66-3.813L148.427 694.622c-3.389-6.186-5.337-12.115-5.931-17.793-0.593-5.678-0.255-10.422 0.847-14.404s3.136-7.627 5.932-11.016a61.66 61.66 0 0 1 8.474-8.474c2.796-2.286 5.931-4.235 9.32-5.931 3.389-1.695 5.677-2.712 6.777-2.967 1.102-0.252 1.948-0.674 2.542-1.27l232.163-61.854c12.456-2.797 22.285-3.559 29.656-2.117 7.372 1.439 13.388 3.135 18.218 5.082 4.83 1.949 8.219 5.34 10.168 10.168 1.948 4.83 3.22 8.896 3.813 12.287 0.593 3.389 0.593 7.369 0 11.861-0.594 4.489-1.102 7.455-1.694 8.898-0.593 1.439-0.847 2.369-0.847 2.965l-27.114 66.09c48.043 17.539 93.374 28.385 135.994 32.621 42.619 4.236 78.97 3.221 108.878-2.967 29.912-6.186 57.787-16.354 83.461-30.502 25.674-14.15 46.01-28.131 61.006-41.943 14.997-13.811 28.385-29.061 40.248-45.754 11.86-16.691 19.317-28.131 22.452-34.316 3.135-6.182 5.507-11.265 7.202-15.25z m-776.984-86.425c12.455-55.329 29.911-103.964 52.533-145.738 64.988-116.93 168.021-173.952 309.269-171.158 62.701 1.102 119.725 12.117 171.156 33.047l27.961-65.245c3.982-6.184 8.219-11.183 12.71-14.828 4.491-3.644 8.728-5.93 12.709-6.777a35.019 35.019 0 0 1 12.287-0.424c4.235 0.592 7.88 1.525 11.014 2.964 3.136 1.441 6.188 3.137 9.322 5.084 3.133 1.949 4.914 3.22 5.506 3.814l2.542 2.542 127.944 228.773c2.799 6.779 4.491 12.964 5.085 18.642 0.593 5.678 0.254 10.422-0.849 14.404-1.099 3.981-3.22 7.627-6.353 11.015-3.137 3.388-6.102 6.1-8.897 8.049a75.022 75.022 0 0 1-9.322 5.507l-6.777 3.39c-1.101 0.592-1.948 0.847-2.542 0.847l-233.857 55.924c-15.846 2.288-28.555 1.949-38.129-0.847-9.575-2.797-15.844-6.609-18.641-11.438-2.797-4.83-4.238-10.592-4.238-17.371 0-6.778 0.255-11.607 0.85-14.402 0.592-2.797 1.438-5.084 2.541-6.779l28.811-65.245c-47.45-18.64-92.612-30.502-135.571-35.586-42.958-5.084-79.224-5.084-108.879 0-29.655 5.083-57.616 14.403-83.885 27.962-26.267 13.556-47.026 27.113-62.277 40.671-15.252 13.558-29.063 28.553-41.519 44.907s-20.335 27.707-23.725 33.893c-3.39 6.185-5.678 11.016-6.779 14.403z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-question" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M470.517286 373.158078c-29.934311 0-54.192202 10.200969-72.740909 30.723727-18.640856 20.521734-27.929544 51.33761-27.929544 92.533636 0 41.83493 9.288688 73.105412 27.870159 93.870831 18.54973 20.706033 42.139024 31.087206 70.55389 31.087206 10.564449 0 20.585214-1.69965 29.996768-5.099973-14.877054-9.592782-29.996768-17.122434-45.35812-22.404658l20.583167-41.288176c24.137073 8.135793 47.178588 20.339482 69.159358 36.614139 9.411554-10.929976 16.486602-24.106356 21.221047-39.528117 4.707825-15.483194 7.074024-33.212792 7.074024-53.250228 0-41.348585-9.260019-72.194154-27.778009-92.624762-18.552802-20.463372-42.748236-30.633625-72.651831-30.633625z"  ></path>' +
    '' +
    '<path d="M795.269138 493.684739c0-180.545795-145.783864-326.908154-325.632393-326.908154-179.847505 0-325.66311 146.362359-325.66311 326.908154 0 103.646888 48.089846 196.059705 123.015726 255.928328 125.626634 117.370023 359.604908 161.998112 359.604908 161.998113l-29.630217-116.883677c116.579583-49.790519 198.305086-165.823348 198.305086-301.042764z m-161.933608 217.555154c-11.053866-3.219095-21.922409-7.71088-32.454093-13.420065-2.33753-1.091462-18.611164-11.718368-48.818852-31.695394-23.831955 10.201993-50.183691 15.363399-79.057258 15.363399-55.860112 0-99.637353-16.150767-131.271313-48.575167-31.633961-32.423377-47.513398-77.901291-47.513399-136.495177 0-58.41061 15.878414-103.888524 47.573808-136.311901 31.755803-32.485834 74.804038-48.726703 129.209209-48.726702 53.888109 0 96.57184 16.241893 128.144367 48.726702 31.5756 32.423377 47.361863 77.901291 47.361864 136.311901 0 30.905979-4.373014 58.10754-13.174333 81.545299-6.588702 17.91185-17.183867 35.216536-31.696418 52.0359 18.032668 12.690035 37.615499 22.769162 58.77409 30.237382l-27.077672 51.003823z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)