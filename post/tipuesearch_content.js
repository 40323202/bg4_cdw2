var tipuesearch = {"pages":[{"tags":"misc","title":"About","text":"CDW2 gh-pages 網頁 CDW2 倉儲: https://github.com/2015fallhw/cdw2 線上分組程式: http://simpleflask-2014openshift.rhcloud.com/option","url":"./pages/about/"},{"tags":"bg4","title":"40323201-期中報告","text":"40323201-期中報告 1. 協同繪圖: bg4藍圖 2. 個人繪圖: 個人藍圖 A 3.Onshape繪製鏈條: A 4. Onshape鏈條A之stl檔: stl之A 心得: 從這次的主題課堂開始,老師就要我們開始畫2D的A~Z,但是也因為才一開始,大家友都相當茫然,不知從何做起,直到後半段學到了新的方法才開始動工. 一樣,一個團隊的合作相當重要,大家幫忙記課堂的重點,一起討論及詢問不清楚的步驟,才能有成功的報告呈現. 本次作業自評: 60分","url":"./40323201-qi-zhong-bao-gao.html"},{"tags":"bg4","title":"40323205-期中報告","text":"40323205-期中報告 期中自評分數：60 協同繪圖： bg4畫布藍圖 個人繪圖： 個人畫布藍圖 組員協同2D繪圖： 【組內字母分配】 A (黑色) --- 40323201 B (黃色) --- 40323202 C (紫色) --- 40323203 D (白色) --- 40323205 E、F (綠色) --- 40123128 G (棕色) --- 40323208 圖為個人2D繪圖： 3D立體圖部分是在onshape上繪圖： 圖為在onshape上輸出為stl檔的3D立體圖： 期中報告心得： 「協同」是這學期最重要的事情，要利用fork的功能，將自己的檔案更改完後， 需再利用Pull Request的功能，請組長幫忙審核，即可完成。 一開始的時候真的毫無頭緒，不知道該從何做起，感謝組員用心的教導， 才能完成本次的作業。","url":"./40323205-qi-zhong-bao-gao.html"},{"tags":"bg4","title":"40323208-期中報告","text":"40323208-期中報告 期中報告自評分數:60 協同繪圖: bg4 個人繪圖: 個人 協同2D繪圖: 40323208負責G的繪製 2D繪圖: 用onshape畫3D: stl檔的3D立體圖: 期中報告心得: 這次是要大家一起畫字母並協同，過程中有很多不會的地方，也有很多不太理解之處，還好有組員互相討論，以及耐心指導我，看到自己能一步步做出來，很高興也知道自己的步驟是在做什麼，也許還是比別人差的多，但是慢慢努力去做還是可以做出來。","url":"./40323208-qi-zhong-bao-gao.html"},{"tags":"ag1","title":"user1-測試 content 目錄下的 md 檔案轉換","text":"網站類別分為 ag1~ag10, bg1~bg10, 與 MISC, 各組員必須透過 Leo Editor, Pelican, 與 Github pull requests 完成. CDW2 網頁: http://2015fallhw.github.io/cdw2/ 二甲文章類別: ag1~ag10 二乙文章類別: bg1~bg10 本網頁將 Pelican 設定分為本地端與 gh-pages 端的原因在於 disqus 設定, 本地端無需 disqus 討論功能, 而 gh-pages 端則需要網址全稱才能正確與 disqus 設定連結, 因此所有使用者在近端檢視時, 必須採用近端的按鈕, 而要送到遠端前則必須要用遠端按鈕產生所需要的 post 目錄下的所有資料後, 再提交推送. 以下為圖片引用方法, 建議放到 files 目錄下, 並且用相對目錄引用各自放在以用戶名稱命名的子目錄中, 以避免多用戶因採相同檔名而覆寫: 得到結果如下: 以下資料則從原先的 cdw2 gh-pages 分支中的 index.html 取出: cdw2 所在倉儲: https://github.com/2015fallhw/cdw2 以下繪圖由 s2a 的 g100 組所完成, 其中包括 s2b 的 g99 協同繪圖 (藍色零件). http://cdw2-ladisai.rhcloud.com/ag100/task2 以下則為4個零件中的第一個弧參數設定比較: 0(表示 x 軸轉角為0), 1(第一個選擇長度較大的弧), 0(且以右手向內畫弧) 0(表示 x 軸轉角為0), 0(第一個選擇長度較小的弧), 0(且以右手向內畫弧) 0(表示 x 軸轉角為0), 1(第一個選擇長度較大的弧), 1(且以右手向外畫弧) 0(表示 x 軸轉角為0), 0(第一個選擇長度較小的弧), 1(且以右手向外畫弧) http://cdw2-ladisai.rhcloud.com/bg99/fourchain Task1 相關: https://cmsimply-cadlab.rhcloud.com/get_page?heading=2016springCD 鍊條零件製造流程: 組立流程: 如何協同編輯 CDW2 gh-pages 網頁: 首先必須要認清的是 gh-pages 網頁位於 https://github.com/2015fallhw/cdw2 倉儲中的 gh-pages 分支, 與 master 分支中的資料不可弄混. CDW2 倉儲中的 master 分支中的資料為 Python3 wsgi 應用程式, 各組必須協同完成任務之後, 將 master 分支中的程式以 git remote add 的方式推送到各組的 OpenShift Python3 應用程式, 然後再將各組的應用程式連結與任務操作過程資料回報到 gh-pages 網頁. gh-pages 分支中各組分別使用 users 目錄下的 .md 檔, 以本地端按鈕產生本地端檢查用的網頁資料, 若沒有錯誤, 再提交推送到遠端, 若倉儲回應需要 pull 回資料, 一定要使用 git pull origin gh-pages 的方式, 明確取回 gh-pages 的分支合併, 若 content 目錄中的檔案能夠自動合併, 即可再用近端 Pelican 按鈕建立網頁資料, 檢查無誤後, 記得要再用遠端 Pelican 專用按鈕建立網頁後提交推送. 另外建議各組員在 content 目錄下建立文章標題時, 可以在標題最前方加上學號, 因為目前的設定會使用各 .md 檔案中的標題, 以拼音的方式建立對應的 html 網頁檔案, 假如有兩份 .md 檔案擁有相同的 Title, 則 Pelican 將會報錯, 一直到使用者修正後才能再正確進行 .md -> .html 檔案轉換的工作. 採用 pull requests 尋求 gh-pages 合併時, 因為網頁中的許多檔案都將產生衝突, 因此通常無法直接在 Github 中直接合併, 各組組長必須要根據系統的提示, 將資料拉到本地端後, 再視實際狀況處理 .md 的衝突 (千萬不要以手動處理 .html 檔案的衝突), 然後再用本地端按鈕建立網頁, 檢視無誤後再用遠端按鈕建立網頁資料後, 執行提交推送流程, 假如各組組長在處理衝突過程, 已經有其他組對遠端的倉儲版本進行更版, 則前述拉回處理衝突與合併的動作, 就必須再重複一遍. 祝大家協同愉快!!!","url":"./user1-ce-shi-content-mu-lu-xia-de-md-dang-an-zhuan-huan.html"},{"tags":"bg4","title":"40323203-期中報告","text":"40323203-期中報告 期中自評分數:60 協同繪圖: bg4藍圖 個人繪圖: 個人藍圖 圖為組員協同2D繪圖: 這一次字母繪圖是負責C(purple) 圖為個人2D繪圖: 3D立體圖部分是在onshape上繪圖: 圖為在onshape上輸出為stl檔的3D立體圖: 期中報告心得: 這學期是協同課程，在做作業前先Fork組長→clone Fork後的班上網址→完成後按New pull request→等組長審核後就能夠回去班上，接下來是openshift的部分，這個部份我覺得很難去完成，後來問班上同學又瞭解了一些，最後還是完成了。","url":"./40323203-qi-zhong-bao-gao.html"}]};