		// ver 1.0 20220325-1
		// var show_debugs = false; // debug mode

        //document.getElementById("fileInput").addEventListener("change", handleFileSelect, false);
        
        //const {jsPDF} = window.jspdf;
        window.jsPDF = window.jspdf.jsPDF; //jsPDF 선언하기 참고 => https://gold-goblin.tistory.com/m/entry/html-화면을-PDF로-출력하기
        //var osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay("musicSheet");
        osmd.TransposeCalculator = new opensheetmusicdisplay.TransposeCalculator(); // Transpose 선언하기

        //******************* variable default setting
        var isMobile,
            fontFamilyName,
            fontFamilyVar,
            ttfName,
            callAddFont,
            zoomVal,
            transposeVal,
            originalKey,
            thisKey,
            originalTitle,
            oTitleText,
            newTitle,
            zoomDivs;
        


        const majorMap = {
            "-1": "F",
            "-2": "Bb",
            "-3": "Eb",
            "-4": "Ab",
            "-5": "Db",
            "-6": "Gb",
            "-7": "Cb",
            "-8": "Fb",
            "0": "C",
            "1": "G",
            "2": "D",
            "3": "A",
            "4": "E",
            "5": "B",
            "6": "F#",
            "7": "C#",
            "8": "G#"
        };
        const minorMap = {
            "-1": "Dm",
            "-2": "Gm",
            "-3": "Cm",
            "-4": "Fm",
            "-5": "Bbm",
            "-6": "Ebm",
            "-7": "Abm",
            "-8": "Dbm",
            "0": "Am",
            "1": "Em",
            "2": "Bm",
            "3": "F#m",
            "4": "C#m",
            "5": "G#m",
            "6": "D#m",
            "7": "A#m",
            "8": "E#m"
        };
        const transposeCircle = [
            ["C"],
            ["C#", "Db"],
            ["D", ],
            ["D#", "Eb"],
            ["E"],
            ["F"],
            ["F#", "Gb"],
            ["G"],
            ["G#", "Ab"],
            ["A"],
            ["A#", "Bb"],
            ["B"],
        ];

        function changeSetting() {
            $("#imgContainer").attr("style", "display:none");
            changeTitle();
            getPageNumber();
            transposeDiv();
        }

        function getPageNumber() {
            const canvPages = $('div[id^="osmdCanvasPage"]'); // 페이지수 구하기
            let message = " / " + originalKey + "→" + thisKey + " , " + canvPages.length + "P"
            if (originalKey == thisKey) message = " / " + thisKey + " , " + canvPages.length + "P"
            if (canvPages.length) $('#pdfBtnStr').text(message);
        }

        function changeTitle() {
            thisKey = getKeyOSMD(); // OSMD 렌더링 후 키 구하기
            osmd.updateGraphic();
            osmd.render();
            if (show_debugs) console.log("Changed key: " + thisKey);

            let findTitle;
            if (osmd.IsReadyToRender()) {
                findTitle = osmd.sheet.TitleString; //제목 Text 가져오기
            } else {
                findTitle = $('text[font-size="40px"]').text();
            }

            let findKeyPosition = findTitle.indexOf('|'); // 제목에서 '|' 위치 가져오기
            if (show_debugs) console.log("findKeyPosition: " + findKeyPosition);

            let cutTitle = findTitle;
            if (findKeyPosition > 0) cutTitle = findTitle.substr(0, findKeyPosition); // 제목에서 * 뒷부분 모두 자르기

            newTitle = cutTitle + " | " + thisKey; // 새 제목 설정하기			
            $('text[font-size="40px"]').text(newTitle); // 새 제목 덮어쓰기
            if (show_debugs) console.log("newTitle: " + newTitle);
            
//////////////////////////// 20220323 Add
/*
            let findTimeFont;
                findTimeFont = $('text[font-family="times"]');
                $(findTimeFont).removeAttr("font-family");
                $(findTimeFont).attr("font-family",fontFamilyName);
                if (true) console.log("findTimeFont: ");
                console.log(findTimeFont);

<path stroke-width="1.5" fill="none" stroke="#000000" stroke-dasharray="none" class="vf-stem" id="vf-auto28017-stem" d="M176.71591999999998 240L176.71591999999998 205"></path>
<path stroke-width="1.5" fill="none" stroke="#000000" stroke-dasharray="none" class="vf-stem" id="vf-auto28025-stem" d="M166.19768 240L166.19768 275"></path>

<path stroke-width="1.5" fill="none" stroke="#000000" stroke-dasharray="none" class="vf-stem" id="vf-auto1120-stem" d="M162.4212 245L162.4212 210"></path>
<path stroke-width="1.5" fill="none" stroke="#000000" stroke-dasharray="none" class="vf-stem" id="vf-auto13612-stem" d="M172.25848 240L172.25848 205"></path>
<path stroke-width="1.5" fill="none" stroke="#000000" stroke-dasharray="none" class="vf-stem" id="vf-auto13714-stem" d="M225.98398740643566 313L225.98398740643566 348"></path>

*/
////////////////////////////

            
        }

        function zoomDiv() {
            for (const zoomDiv of zoomDivs) {
                if (zoomDiv) {
                    //if (show_debugs) console.log(zoomDiv);            
                    zoomDiv.innerHTML = Math.floor(zoomVal * 100.0) + "%";
                }
            }
        }

        function transposeDiv() {
            for (const transposeDiv of transposeDivs) {
                if (transposeDiv) {
                    //if (show_debugs) console.log(transposeDiv);
                    transposeDiv.innerHTML = "key";
                    if (osmd.IsReadyToRender()) transposeDiv.innerHTML = thisKey;
                }
            }
        }

        function transpose() {
            window.setTimeout(function() {
                //transposeVal = $("#transposeVal").val();
                if (show_debugs) console.log("조옮김 값: " + transposeVal);
                if (osmd.IsReadyToRender()) {
                    osmd.Sheet.Transpose = parseInt(transposeVal);
                    osmd.updateGraphic();
                    osmd.render();
                    changeSetting();
                    transposeDiv();
                }
            }, 0);
        }

        function changeFont() {
            window.setTimeout(function() {
                //******************* Font Setting
                fontFamilyName = $("#Fontface").val(); //$("#Fontface").val(); // NanumMyeongjo, KoPubDotumMedium, NanumBarunGothic
                if (fontFamilyName === "ChosunKm") fontFamilyVar = ChosunKm;
                if (fontFamilyName === "NanumMyeongjo") fontFamilyVar = NanumMyeongjo;
                if (fontFamilyName === "KoPubDotumMedium") fontFamilyVar = KoPubDotumMedium;
                if (fontFamilyName === "NanumBarunGothic") fontFamilyVar = NanumBarunGothic;
                ttfName = fontFamilyName + ".ttf"; // NanumMyeongjo, KoPubDotumMedium

                callAddFont = function() {
                    this.addFileToVFS(ttfName, fontFamilyVar);
                    this.addFont(ttfName, fontFamilyName, 'normal');
                };
                jsPDF.API.events.push(['addFonts', callAddFont]);

                if (show_debugs) console.log("Selected Font: " + fontFamilyName);
                if (osmd.IsReadyToRender()) {
                    osmd.setOptions({
                        defaultFontFamily: fontFamilyName
                    });
                    osmd.updateGraphic();
                    osmd.render();
                    changeSetting();
                }
            }, 0);
        }

        function scale() {
            window.setTimeout(function() {
                if (show_debugs) console.log("확대/축소: " + zoomVal);
                if (osmd.IsReadyToRender()) {
                    osmd.Zoom = zoomVal;
                    osmd.render();
                    changeSetting();
                    zoomDiv();
                }
            }, 0);
        }

        $(document).ready(function() {
            $('.ui.form').form();
            $('select.dropdown').dropdown();
            $('.ui.dropdown').dropdown({ fullTextSearch: true, allowReselection: false }); // https://semantic-ui.com/modules/dropdown.html#additional-settings
            $('.ui.radio.checkbox').checkbox();
            $('.ui.checkbox').checkbox();
            
            // 디바이스 정보 가져오기
            // https://7942yongdae.tistory.com/65
            isMobile = isToouch();
            //function isM() { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) }
            function isToouch() {
                try {
                    document.createEvent("TouchEvent");
                    return true;
                } catch (e) {
                    return false;
                }
            };
            if (show_debugs) console.log("isMobile: " + isMobile);
        });

        //******************* set dropdown
        $.each(hymnArrays, function(index, item) {
            var option = $("<option>" + item.title + "</option>");
            option.val(item.number);
            $('#hymnLists').append(option);
        });

        //******************* File Select Option
        $("#hymnLists").on('change', function() {
            
            if (this.value == "default" || this.value == "") {return false;}
            
            init();
            
            const fileName = this.value + ".xml";
            const fileParents = "./HymnXML_Merge/";
            const hymnUrl = fileParents + fileName;
            //if (show_debugs) console.log(hymnUrl);

            $.ajax({

                url: hymnUrl, //"ajax_xml.xml", //ajax로 ajax_xml.xml파일을 불러온다.

                cache: false, //사용자캐시를 사용할 것인가.

                dataType: "text", //서버로부터 받을 것으로 예상되는 데이터 타입.

                success: function(data) { //ajax요청을 통해 반환되는 데이터 data.
                
                xml_string_loaded = data;
                
                if (show_debugs) console.log(data);
                

            // store xml and name for reload
            localStorage.setItem('song_data', xml_string_loaded);
            localStorage.setItem('song_name', song_name);

            ////////////////////////////////////////////////////////////////////////////////////////////////
            $("#transpose_key").val('None');
            $("#transpose_label").text('key');
            originalKey = getKeyXML(xml_string_loaded); //최초 로딩된 XML 데이터에서 원래키 구하기
            $("#transpose_label").text(originalKey);

            let fifths = $(xml_string_loaded).find("fifths");
            let majorMinor = $(xml_string_loaded).find("mode");
            const numberOfAccidentals = fifths[0].childNodes[0].nodeValue;
            const mode = majorMinor[0].childNodes[0].nodeValue;

            if (mode == 'major') {
                circleArray = majorCircle;
            } else if (mode == 'minor') {
                circleArray = minorCircle;
            }

            maxLength = circleArray.length;
            position = circleArray.indexOf(originalKey); //최초 키값
            if (show_debugs) console.log("=========originalKey: " + originalKey);
            ////////////////////////////////////////////////////////////////////////////////////////////////

                    if (show_debugs) console.log("fontFamilyName: " + fontFamilyName);
                    //if (show_debugs) console.log(data);
                    originalKey = getKeyXML(xml_string_loaded); // XML 데이터에서 키 구하기

                    if (show_debugs) console.log("Original Key: " + originalKey);

                    renderOSMD(xml_string_loaded);

                    if (show_debugs) console.log("xml load success");
                },
                error: function(request, status, error) {
                    if (show_debugs) console.error("XML로딩에러 \n code = " + request.status + " message = " + request.responseText + " error = " + error); // 실패 시 처리
                    console.error("XML로딩에러 \n code = " + request.status + " message = " + request.responseText + " error = " + error); // 실패 시 처리
                },
                complete: function() {
                    if (show_debugs) console.log("xml load complete!");
                }
            });

        });

        function getKeyXML(data) {
            let fifths = $(data).find("fifths");
            let majorMinor = $(data).find("mode");

            const numberOfAccidentals = fifths[0].childNodes[0].nodeValue;
            const mode = majorMinor[0].childNodes[0].nodeValue;

            let currentKey = "C";
            if (mode === "major") {
                currentKey = majorMap[numberOfAccidentals];
            } else if (mode === "minor") {
                currentKey = minorMap[numberOfAccidentals];
            }

            return currentKey;

        }


        function getKeyOSMD() {
            // https://gitter.im/opensheetmusicdisplay/opensheetmusicdisplay?at=5fba3fb8abf6a739a6aaa54e
            // -3 = 3 flats, +4 = 4 sharps, 0 = C Major / A minor / no accidentals
            // keyInstruction.Mode gives you major (0), minor (1) or other (2+).
            // 이거 참고함 https://gitanswer.com/wrong-test-description-typescript-opensheetmusicdisplay-852897393	
            const staffIndex = 0;
            const keyInstruction = osmd.Sheet.SourceMeasures[0].getKeyInstruction(staffIndex);
            // osmd 에서 구할 때 (단, render가 된 상태에서만 가능함)
            const numberOfAccidentals = keyInstruction.Key; // or var mainKey = osmd.sheet.getFirstSourceMeasure().getKeyInstruction(0).Key;
            const mode = keyInstruction.Mode;

            // if (show_debugs) console.log(keyInstruction + " / " + numberOfAccidentals + " / " + mode);

            let currentKey = "C";
            if (mode === 0) {
                currentKey = majorMap[numberOfAccidentals];
            } else if (mode === 1) {
                currentKey = minorMap[numberOfAccidentals];
            }

            return currentKey;
        }


        //******************* File Upload
        function handleFileSelect(evt) {

            var file = evt.target.files[0];

            if (!file.name.match('.*\.xml') && !file.name.match('.*\.musicxml') && !file.name.match('.*\.mxl')) {
                alert('You selected a non-xml file. Please select only music xml files.');
                return;
            }

            var reader = new FileReader();
            reader.onload = function(e) {
                xml_string_loaded = e.target.result;
            // store xml and name for reload
            localStorage.setItem('song_data', xml_string_loaded);
            localStorage.setItem('song_name', song_name);
            
            if (show_debugs) console.log(xml_string_loaded);

            ////////////////////////////////////////////////////////////////////////////////////////////////
            $("#transpose_key").val('None');
            $("#transpose_label").text('key');
            originalKey = getKeyXML(xml_string_loaded); //최초 로딩된 XML 데이터에서 원래키 구하기
            $("#transpose_label").text(originalKey);

            let fifths = $(xml_string_loaded).find("fifths");
            let majorMinor = $(xml_string_loaded).find("mode");
            const numberOfAccidentals = fifths[0].childNodes[0].nodeValue;
            const mode = majorMinor[0].childNodes[0].nodeValue;

            if (mode == 'major') {
                circleArray = majorCircle;
            } else if (mode == 'minor') {
                circleArray = minorCircle;
            }

            maxLength = circleArray.length;
            position = circleArray.indexOf(originalKey); //최초 키값
            if (show_debugs) console.log("=========originalKey: " + originalKey);
            ////////////////////////////////////////////////////////////////////////////////////////////////                
                renderOSMD(xml_string_loaded);

            };

            if (file.name.match('.*\.mxl')) {
                // have to read as binary, otherwise JSZip will throw ("corrupted zip: missing 37 bytes" or similar)
                reader.readAsBinaryString(file);
            } else {
                reader.readAsText(file);
            }

        }

        //******************* PDF Download
        $('#pdfDownload').click(function() {

            if (!osmd.IsReadyToRender()) {
                alert("파일을 선택 또는 업로드 해 주세요.");
                return false;
            }
            $('.ui.dimmer').dimmer('show'); // 로딩중 열기....

            createPdf(newTitle);

        });

        //******************* Reset
        $('#resetBtn').click(function() {
            init();
            $("#hymnLists").dropdown('restore defaults');
        });

        //******************* ReRender
        $('#rerenderBtn').click(function() {
            if (!osmd.IsReadyToRender()) {
                alert("파일을 선택 또는 업로드 해 주세요.");
                return false;
            }
            if (osmd.IsReadyToRender()) {
                $("#musicSheet").empty();
                $('.ui.dimmer').dimmer('hide'); // 로딩중 닫기....
                osmd.render();
                changeSetting();
                if (show_debugs) console.log("ReRendered");
                //document.getElementById("fileInput").addEventListener("focus", handleFileSelect, false);
                //$("#fileInput").trigger("focus");   
            }
        });

        //******************* Create PDF 참고 : 
        // https://www.cdnpkg.com/svg2pdf.js
        // https://github.com/yWorks/svg2pdf.js/blob/master/README.md
        // https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/blob/develop/demo/index.js#L835
        async function createPdf(newTitle) {

            newTitle = newTitle.replace(" | ", "_");

            let pdfName = newTitle + ".pdf"

            if (show_debugs) console.log("backendType: " + osmd.backendType);

            if (osmd.backendType !== 0) {
                if (show_debugs) console.log("[OSMD] createPdf(): Warning: createPDF is only supported for SVG background for now, not for Canvas." +
                    " Please use osmd.setOptions({backendType: SVG}).");
            }

            if (newTitle === undefined) {
                pdfName = osmd.sheet.TitleString + ".pdf"; // osmd.sheet.FullNameString은 작곡가 이름까지 나옴
            }

            const backends = osmd.drawer.Backends;
            let svgElement = backends[0].getSvgElement();

            //if (show_debugs) console.log(svgElement);
            svgElement.getBoundingClientRect() // force layout calculation



            let pageWidth = 210;
            let pageHeight = 297;
            const engravingRulesPageFormat = osmd.rules.PageFormat;
            if (engravingRulesPageFormat && !engravingRulesPageFormat.IsUndefined) {
                pageWidth = engravingRulesPageFormat.width;
                pageHeight = engravingRulesPageFormat.height;
            } else {
                pageHeight = pageWidth * svgElement.clientHeight / svgElement.clientWidth;
            }

            const orientation = pageHeight > pageWidth ? "p" : "l";
            // create a new jsPDF instance
            const pdf = new jsPDF({
                orientation: orientation,
                unit: "mm",
                format: [pageWidth, pageHeight]
            });

            if (show_debugs) console.log("PDF pageWidth: " + pageWidth);
            if (show_debugs) console.log("PDF pageHeight: " + pageHeight);
            // add the font to jsPDF

            pdf.setFont(fontFamilyName); //KoPubDotumMedium , NanumBarunGothic, NanumMyeongjo
            //pdf.setFontSize(100);

            //const scale = pageWidth / svgElement.clientWidth;
            for (let idx = 0, len = backends.length; idx < len; ++idx) {
                if (idx > 0) {
                    pdf.addPage();
                }
                svgElement = backends[idx].getSvgElement();

                if (!pdf.svg && !svg2pdf) { // this line also serves to make the svg2pdf not unused, though it's still necessary
                    // we need svg2pdf to have pdf.svg defined
                    if (show_debugs) console.log("svg2pdf missing, necessary for jspdf.svg().");
                    return;
                }

                await pdf.svg(svgElement, {
                    x: 0,
                    y: 0,
                    width: pageWidth,
                    height: pageHeight,
                })
            }

            pdf.setProperties({
                // 속성 자세히 보기 https://opensheetmusicdisplay.github.io/classdoc/classes/MusicSheet.html
                title: osmd.sheet.TitleString,
                subject: 'Subject: ' + osmd.sheet.SubtitleString,
                author: 'Lyricist:' + osmd.sheet.LyricistString + ' / Composer: ' + osmd.sheet.ComposerString,
                keywords: osmd.sheet.TitleString + '\n' + osmd.sheet.LyricistString + ' / ' + osmd.sheet.ComposerString,
                creator: 'David'
            });


            var pageCount = pdf.internal.getNumberOfPages(); //Total Page Number
            for (i = 0; i < pageCount; i++) {
                pdf.setPage(i);
                let pageCurrent = pdf.internal.getCurrentPageInfo().pageNumber; //Current Page
                pdf.setFontSize(8);
                if (pageCount > 1) pdf.text('page: ' + pageCurrent + '/' + pageCount, 10, 10, null, null, "left");
            }



            var fontLists = pdf.getFontList();
            var fontSize = pdf.getFontSize();
            if (show_debugs) console.log("fontSize : " + fontSize);
            const pdfResult = await pdf.save(pdfName);
            $('.ui.dimmer').dimmer('hide'); // 로딩중 닫기....
            // document.getElementById('pdf-iframe').setAttribute('src', pdf.output('datauristring'))  
        }


        $("#downImg").on('click', function() {
            const canvPages = $('div[id^="osmdCanvasPage"]');
            if (!canvPages.length) {
                alert("파일을 선택 또는 업로드 해 주세요.");
                return false;
            }
            if (canvPages.length > 0) {
                $('.ui.dimmer').dimmer('show'); // 로딩중 열기....
                imgDown(canvPages);
            }
        });

        async function imgDown(canvPages) {
            //let mWidth = $("#musicSheet").width();
            if (isMobile) {
                $("#imgContainer").attr("style", "display:block");
                $("#imgContainer").html("<div class='ui content'>*Download Image Files</div>");
            }

            for (let i = 0; i < canvPages.length; i++) {
                if (canvPages.length > 1) await renderingPNG(canvPages[i], (i + 1));
                if (canvPages.length <= 1) await renderingPNG(canvPages[i], 0);
            }
            if (show_debugs) console.log('Done! download image');
            $('.ui.dimmer').dimmer('hide'); // 로딩중 닫기....
        }

        async function renderingPNG(canvPages, pageNum) {
            try {
                await html2canvas(canvPages, { // https://html2canvas.hertzen.com/configuration/
                    //width: 576, 
                    //height: 1024,
                    //allowTaint: false, //는 도메인 간 이미지 오염을 허용 할 것입니까? 
                    //useCORS: true, //는 CORS를 사용하여 서버에서 이미지를로드하려고합니까?
                    //imageTimeout: 15000, //newline
                    scale: 2, // 줌 비율, 기본값은 1입니다 2로하면 1080 / 4로하면 4K
                    backgroundColor: '#ffffff' //'transparent'// 캔버스 배경색, 기본값은 투명합니다 
                }).then((canvas) => {
                    //canvas을 base64 형식으로 바꿉니다
                    let imgUri = canvas.toDataURL('image/png', 1.0);
                    let imgName;
                    if (pageNum == 0) imgName = newTitle + ".png"; //osmd.sheet.TitleString + ".png";
                    if (pageNum > 0) imgName = newTitle + "-" + pageNum + ".png"; //osmd.sheet.TitleString + ".png";
                    //saveAs(imgUri, imgName);
                    downloadURI(imgUri, imgName);
                });

            } catch (err) {
                if (show_debugs) console.log('Error! : ' + err);
                $('.ui.dimmer').dimmer('hide'); // 로딩중 닫기....
            }

        }

        async function downloadURI(uri, fileName) {
            let mWidth = $("#musicSheet").width();

            fileName = fileName.replace(" | ", "_");

            if (mWidth >= 900) {
                var link = document.createElement("a");
                link.download = fileName;
                link.href = uri;
                document.body.appendChild(link);
                link.click();
            }

            if (mWidth < 900) {
                var a = document.createElement("a");
                a.download = fileName;
                a.innerText = fileName;
                a.href = uri;

                var imgContainer = document.getElementById('imgContainer');
                imgContainer.appendChild(a);
                imgContainer.appendChild(document.createElement('br'));
            }

        }

        // 다양한 클래스 옵션 https://opensheetmusicdisplay.github.io/classdoc/classes/OpenSheetMusicDisplay.html
        // https://opensheetmusicdisplay.github.io/classdoc/classes/GraphicalMusicSheet.html	
        // 여기부터 https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/925
        // 참고 : https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/504

        //******************* OSMD Rendering	
        async function renderOSMD(data) {
            await osmd.load(data);
            //osmd.Sheet.Transpose = parseInt(transposeVal);
            osmd.zoom = zoomVal;
            osmd.setOptions({
                backend: "svg", //svg, canvas
                drawSlurs: true,
                pageFormat: "A4_P",

                defaultFontFamily: fontFamilyName, // "KoPubDotumMedium", "GmarketSansLight", "NanumMyeongjo"
                defaultFontStyle: 0, // 0=regular, 1=bold, 2=italic
                defaultColorTitle: "black", // chocolate, coral, darkblue, darkgray, darkviolet
                
                setWantedStemDirectionByXml: true,
                autoResize: false,
                autoBeam: false,
                // try true, OSMD Function Test AutoBeam sample
                autoBeamOptions: {
                    beam_rests: false,
                    beam_middle_rests_only: false,
                    //groups: [[3,4], [1,1]],
                    maintain_stem_directions: false
                },

                drawUpToMeasureNumber: Number.MAX_SAFE_INTEGER,
                drawLyrics: true,
                drawTitle: true,
                drawSubtitle: true,
                drawComposer: true,
                drawLyricist: true,
                drawCredits: true,
                drawMetronomeMarks: true,
                drawPartNames: false,
                drawPartAbbreviations: true,
                drawMeasureNumbers: true,
                drawingParameters: "default", // allon, compact, compacttight, default, leadsheet, preview, thumbnail
                RenderChordSymbols: true,
                //measureNumberInterval: 3,
                //pageBackgroundColor: pageBackgroundColor,
                //renderSingleHorizontalStaffline: singleHorizontalStaffline,
                stretchLastSystemLine: true

            });

            //await osmd.updateGraphic();
            await osmd.render();
            if (show_debugs) console.log("osmd render Done");

            await changeSetting();
            if (show_debugs) console.log("changed title (1)");

            //$('#musicSheet').focus();
            //$('#musicSheet').dblclick();
            //$('#hymnLists').blur();
            $('#pdfDownload').focus();
            //$('#pdfDownload').click();
            //createPdf(newTitle);
        }

        // Initialization code
        function init() {
            $("#imgContainer").empty();
            $("#imgContainer").attr("style", "display:none");
            $('#pdfBtnStr').empty();
            $('.ui.dimmer').dimmer('hide'); // 로딩중 닫기....	    
            $("#fileInput").val('');
            $("#Fontface").dropdown('restore defaults');
            $("#musicSheet").empty();
            //$("#transposeVal").val(0)//.dropdown('restore defaults');
            if (osmd.IsReadyToRender()) osmd.clear();

            transposeVal = 0;

            zoomDivs = [];
            zoomDivs.push(document.getElementById("zoom-str"));
            zoomIns = [];
            zoomIns.push(document.getElementById("zoom-in-btn"));
            zoomOuts = [];
            zoomOuts.push(document.getElementById("zoom-out-btn"));

            transposeDivs = [];
            transposeDivs.push(document.getElementById("transpose-str"));
            transposeUps = [];
            transposeUps.push(document.getElementById("transpose-up-btn"));
            transposeDowns = [];
            transposeDowns.push(document.getElementById("transpose-down-btn"));

            //******************* Font Setting
            fontFamilyName = "ChosunKm"; //$("#Fontface").val(); // ChosunKm, NanumMyeongjo, KoPubDotumMedium, NanumBarunGothic
            if (fontFamilyName === "ChosunKm") fontFamilyVar = ChosunKm;
            if (fontFamilyName === "NanumMyeongjo") fontFamilyVar = NanumMyeongjo;
            if (fontFamilyName === "KoPubDotumMedium") fontFamilyVar = KoPubDotumMedium;
            if (fontFamilyName === "NanumBarunGothic") fontFamilyVar = NanumBarunGothic;
            ttfName = fontFamilyName + ".ttf"; // NanumMyeongjo, KoPubDotumMedium

            callAddFont = function() {
                this.addFileToVFS(ttfName, fontFamilyVar);
                this.addFont(ttfName, fontFamilyName, 'normal');
            };
            jsPDF.API.events.push(['addFonts', callAddFont]);

            //******************* 브라우저 크기에 따른 zoom 기본값 Setting
            var mWidth = $("#musicSheet").width();
            var canvasWidth = $("#createCanvas").width();

            if (show_debugs) console.log("mWidth: " + mWidth + " / " + "canvasWidth: " + canvasWidth);

            zoomVal = 1; // 기본값(1)
            if (mWidth >= 900 && canvasWidth >= 1200) zoomVal = 0.8; // 화면 사이즈가 700 이하일 경우
            if (mWidth >= 900 && canvasWidth < 1200) zoomVal = 0.7; // 화면 사이즈가 700 이하일 경우
            if (mWidth > 700 && mWidth < 900) zoomVal = 0.6; // 화면 사이즈가 900 이하 700이상일 경우
            if (mWidth <= 700) zoomVal = 0.4; // 화면 사이즈가 700 이하일 경우

            if (show_debugs) console.log("현재 브라우저 가로 사이즈: " + canvasWidth);
            if (show_debugs) console.log("줌값설정: " + zoomVal);

            if (mWidth < 700) $("#topContainer").removeClass("container"); // 화면 사이즈가 700 이하일 경우 container 속성 제거(여백확보)

            zoomDiv();
            transposeDiv();

            for (const zoomIn of zoomIns) {
                if (zoomIn) {
                    zoomIn.onclick = function() {
                        if (!osmd.IsReadyToRender()) alert("선택된 악보가 없습니다.");
                        if (osmd.IsReadyToRender()) {
                            zoomVal *= 1.1;
                            if (show_debugs) console.log("zoomVal: " + zoomVal);
                            scale();
                        }
                    };
                }
            }
            for (const zoomOut of zoomOuts) {
                if (zoomOut) {
                    zoomOut.onclick = function() {
                        if (!osmd.IsReadyToRender()) alert("선택된 악보가 없습니다.");
                        if (osmd.IsReadyToRender()) {
                            zoomVal /= 1.1;
                            if (show_debugs) console.log("zoomVal: " + zoomVal);
                            scale();
                        }
                    };
                }
            }


            for (const transposeUp of transposeUps) {
                if (transposeUp) {
                    transposeUp.onclick = function() {
                        if (!osmd.IsReadyToRender()) alert("선택된 악보가 없습니다.");
                        if (osmd.IsReadyToRender()) {
                            doKeyChange('plus');
                            //transposeVal += 1;
                            //if (show_debugs) console.log("transposeVal: " + transposeVal);
                            //transpose();
                        }
                    };
                }
            }
            for (const transposeDown of transposeDowns) {
                if (transposeDown) {
                    transposeDown.onclick = function() {
                        if (!osmd.IsReadyToRender()) alert("선택된 악보가 없습니다.");
                        if (osmd.IsReadyToRender()) {
                            doKeyChange('minus')
                            //transposeVal -= 1;
                            //if (show_debugs) console.log("transposeVal: " + transposeVal);
                            //transpose();
                        }
                    };
                }
            }


        }




        // Register events: load, drag&drop
        window.addEventListener("load", function() {
            init();
        });

        window.addEventListener("resize", function() {
            let mWidth = $("#musicSheet").width();
            //if (show_debugs) console.log(mWidth);
            if (mWidth >= 900) $("#imgContainer").attr("style", "display:none"); // 900이상 커지면 이미지 박스 숨김 
            if (mWidth >= 700) $("#topContainer").addClass("container"); // 화면 사이즈가 700 이상일 경우 container 속성 추가
            if (mWidth < 700) $("#topContainer").removeClass("container"); // 화면 사이즈가 700 이상일 경우 container 속성 추가
        });

        /*
        window.addEventListener("resize", () => {
            osmd.render();
            changeSetting();
        });
        */
