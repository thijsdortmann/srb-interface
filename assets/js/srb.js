var srb = {
    defaultDischargeTime: 7200000,
    bufferCapacity: null,

    init: function () {
        this.setCurrentLevel(100, 200);

        var demoData = [
            {
                "ms": 1529503166000,
                "value": 300
            },
            {
                "ms": 1529503226000,
                "value": 300
            },
            {
                "ms": 1529503286000,
                "value": 300
            },
            {
                "ms": 1529503346000,
                "value": 300
            },
            {
                "ms": 1529503406000,
                "value": 300
            },
            {
                "ms": 1529503466000,
                "value": 300
            },
            {
                "ms": 1529503526000,
                "value": 300
            },
            {
                "ms": 1529503586000,
                "value": 300
            },
            {
                "ms": 1529503646000,
                "value": 300
            },
            {
                "ms": 1529503706000,
                "value": 300
            },
            {
                "ms": 1529503766000,
                "value": 300
            },
            {
                "ms": 1529503826000,
                "value": 300
            },
            {
                "ms": 1529503886000,
                "value": 300
            },
            {
                "ms": 1529503946000,
                "value": 300
            },
            {
                "ms": 1529504006000,
                "value": 300
            },
            {
                "ms": 1529504066000,
                "value": 300
            },
            {
                "ms": 1529504126000,
                "value": 300
            },
            {
                "ms": 1529504186000,
                "value": 300
            },
            {
                "ms": 1529504246000,
                "value": 300
            },
            {
                "ms": 1529504306000,
                "value": 300
            },
            {
                "ms": 1529504366000,
                "value": 300
            },
            {
                "ms": 1529504426000,
                "value": 300
            },
            {
                "ms": 1529504486000,
                "value": 300
            },
            {
                "ms": 1529504546000,
                "value": 300
            },
            {
                "ms": 1529504606000,
                "value": 300
            },
            {
                "ms": 1529504666000,
                "value": 296
            },
            {
                "ms": 1529504726000,
                "value": 292
            },
            {
                "ms": 1529504786000,
                "value": 288
            },
            {
                "ms": 1529504846000,
                "value": 284
            },
            {
                "ms": 1529504906000,
                "value": 280
            },
            {
                "ms": 1529504966000,
                "value": 280
            },
            {
                "ms": 1529505026000,
                "value": 280
            },
            {
                "ms": 1529505086000,
                "value": 280
            },
            {
                "ms": 1529505146000,
                "value": 280
            },
            {
                "ms": 1529505206000,
                "value": 280
            },
            {
                "ms": 1529505266000,
                "value": 280
            },
            {
                "ms": 1529505326000,
                "value": 280
            },
            {
                "ms": 1529505386000,
                "value": 280
            },
            {
                "ms": 1529505446000,
                "value": 280
            },
            {
                "ms": 1529505506000,
                "value": 280
            },
            {
                "ms": 1529505566000,
                "value": 280
            },
            {
                "ms": 1529505626000,
                "value": 280
            },
            {
                "ms": 1529505686000,
                "value": 280
            },
            {
                "ms": 1529505746000,
                "value": 280
            },
            {
                "ms": 1529505806000,
                "value": 280
            },
            {
                "ms": 1529505866000,
                "value": 280
            },
            {
                "ms": 1529505926000,
                "value": 280
            },
            {
                "ms": 1529505986000,
                "value": 280
            },
            {
                "ms": 1529506046000,
                "value": 280
            },
            {
                "ms": 1529506106000,
                "value": 280
            },
            {
                "ms": 1529506166000,
                "value": 280
            },
            {
                "ms": 1529506226000,
                "value": 280
            },
            {
                "ms": 1529506286000,
                "value": 280
            },
            {
                "ms": 1529506346000,
                "value": 280
            },
            {
                "ms": 1529506406000,
                "value": 280
            },
            {
                "ms": 1529506466000,
                "value": 280
            },
            {
                "ms": 1529506526000,
                "value": 280
            },
            {
                "ms": 1529506586000,
                "value": 280
            },
            {
                "ms": 1529506646000,
                "value": 275
            },
            {
                "ms": 1529506706000,
                "value": 270
            },
            {
                "ms": 1529506766000,
                "value": 270
            },
            {
                "ms": 1529506826000,
                "value": 270
            },
            {
                "ms": 1529506886000,
                "value": 270
            },
            {
                "ms": 1529506946000,
                "value": 270
            },
            {
                "ms": 1529507006000,
                "value": 270
            },
            {
                "ms": 1529507066000,
                "value": 270
            },
            {
                "ms": 1529507126000,
                "value": 270
            },
            {
                "ms": 1529507186000,
                "value": 270
            },
            {
                "ms": 1529507246000,
                "value": 270
            },
            {
                "ms": 1529507306000,
                "value": 270
            },
            {
                "ms": 1529507366000,
                "value": 270
            },
            {
                "ms": 1529507426000,
                "value": 270
            },
            {
                "ms": 1529507486000,
                "value": 270
            },
            {
                "ms": 1529507546000,
                "value": 270
            },
            {
                "ms": 1529507606000,
                "value": 270
            },
            {
                "ms": 1529507666000,
                "value": 270
            },
            {
                "ms": 1529507726000,
                "value": 270
            },
            {
                "ms": 1529507786000,
                "value": 270
            },
            {
                "ms": 1529507846000,
                "value": 270
            },
            {
                "ms": 1529507906000,
                "value": 270
            },
            {
                "ms": 1529507966000,
                "value": 270
            },
            {
                "ms": 1529508026000,
                "value": 270
            },
            {
                "ms": 1529508086000,
                "value": 270
            },
            {
                "ms": 1529508146000,
                "value": 270
            },
            {
                "ms": 1529508206000,
                "value": 270
            },
            {
                "ms": 1529508266000,
                "value": 270
            },
            {
                "ms": 1529508326000,
                "value": 270
            },
            {
                "ms": 1529508386000,
                "value": 270
            },
            {
                "ms": 1529508446000,
                "value": 270
            },
            {
                "ms": 1529508506000,
                "value": 270
            },
            {
                "ms": 1529508566000,
                "value": 270
            },
            {
                "ms": 1529508626000,
                "value": 270
            },
            {
                "ms": 1529508686000,
                "value": 270
            },
            {
                "ms": 1529508746000,
                "value": 270
            },
            {
                "ms": 1529508806000,
                "value": 270
            },
            {
                "ms": 1529508866000,
                "value": 270
            },
            {
                "ms": 1529508926000,
                "value": 270
            },
            {
                "ms": 1529508986000,
                "value": 270
            },
            {
                "ms": 1529509046000,
                "value": 270
            },
            {
                "ms": 1529509106000,
                "value": 270
            },
            {
                "ms": 1529509166000,
                "value": 270
            },
            {
                "ms": 1529509226000,
                "value": 270
            },
            {
                "ms": 1529509286000,
                "value": 270
            },
            {
                "ms": 1529509346000,
                "value": 270
            },
            {
                "ms": 1529509406000,
                "value": 270
            },
            {
                "ms": 1529509466000,
                "value": 270
            },
            {
                "ms": 1529509526000,
                "value": 270
            },
            {
                "ms": 1529509586000,
                "value": 270
            },
            {
                "ms": 1529509646000,
                "value": 270
            },
            {
                "ms": 1529509706000,
                "value": 270
            },
            {
                "ms": 1529509766000,
                "value": 270
            },
            {
                "ms": 1529509826000,
                "value": 270
            },
            {
                "ms": 1529509886000,
                "value": 270
            },
            {
                "ms": 1529509946000,
                "value": 270
            },
            {
                "ms": 1529510006000,
                "value": 270
            },
            {
                "ms": 1529510066000,
                "value": 270
            },
            {
                "ms": 1529510126000,
                "value": 270
            },
            {
                "ms": 1529510186000,
                "value": 270
            },
            {
                "ms": 1529510246000,
                "value": 270
            },
            {
                "ms": 1529510306000,
                "value": 270
            },
            {
                "ms": 1529510366000,
                "value": 270
            },
            {
                "ms": 1529510426000,
                "value": 270
            },
            {
                "ms": 1529510486000,
                "value": 270
            },
            {
                "ms": 1529510546000,
                "value": 270
            },
            {
                "ms": 1529510606000,
                "value": 270
            },
            {
                "ms": 1529510666000,
                "value": 270
            },
            {
                "ms": 1529510726000,
                "value": 270
            },
            {
                "ms": 1529510786000,
                "value": 270
            },
            {
                "ms": 1529510846000,
                "value": 270
            },
            {
                "ms": 1529510906000,
                "value": 270
            },
            {
                "ms": 1529510966000,
                "value": 270
            },
            {
                "ms": 1529511026000,
                "value": 270
            },
            {
                "ms": 1529511086000,
                "value": 270
            },
            {
                "ms": 1529511146000,
                "value": 270
            },
            {
                "ms": 1529511206000,
                "value": 270
            },
            {
                "ms": 1529511266000,
                "value": 270
            },
            {
                "ms": 1529511326000,
                "value": 270
            },
            {
                "ms": 1529511386000,
                "value": 270
            },
            {
                "ms": 1529511446000,
                "value": 270
            },
            {
                "ms": 1529511506000,
                "value": 270
            },
            {
                "ms": 1529511566000,
                "value": 270
            },
            {
                "ms": 1529511626000,
                "value": 270
            },
            {
                "ms": 1529511686000,
                "value": 270
            },
            {
                "ms": 1529511746000,
                "value": 270
            },
            {
                "ms": 1529511806000,
                "value": 270
            },
            {
                "ms": 1529511866000,
                "value": 270
            },
            {
                "ms": 1529511926000,
                "value": 270
            },
            {
                "ms": 1529511986000,
                "value": 270
            },
            {
                "ms": 1529512046000,
                "value": 270
            },
            {
                "ms": 1529512106000,
                "value": 270
            },
            {
                "ms": 1529512166000,
                "value": 270
            },
            {
                "ms": 1529512226000,
                "value": 270
            },
            {
                "ms": 1529512286000,
                "value": 270
            },
            {
                "ms": 1529512346000,
                "value": 270
            },
            {
                "ms": 1529512406000,
                "value": 270
            },
            {
                "ms": 1529512466000,
                "value": 270
            },
            {
                "ms": 1529512526000,
                "value": 270
            },
            {
                "ms": 1529512586000,
                "value": 270
            },
            {
                "ms": 1529512646000,
                "value": 270
            },
            {
                "ms": 1529512706000,
                "value": 270
            },
            {
                "ms": 1529512766000,
                "value": 270
            },
            {
                "ms": 1529512826000,
                "value": 270
            },
            {
                "ms": 1529512886000,
                "value": 270
            },
            {
                "ms": 1529512946000,
                "value": 270
            },
            {
                "ms": 1529513006000,
                "value": 270
            },
            {
                "ms": 1529513066000,
                "value": 270
            },
            {
                "ms": 1529513126000,
                "value": 270
            },
            {
                "ms": 1529513186000,
                "value": 270
            },
            {
                "ms": 1529513246000,
                "value": 270
            },
            {
                "ms": 1529513306000,
                "value": 270
            },
            {
                "ms": 1529513366000,
                "value": 270
            },
            {
                "ms": 1529513426000,
                "value": 270
            },
            {
                "ms": 1529513486000,
                "value": 270
            },
            {
                "ms": 1529513546000,
                "value": 270
            },
            {
                "ms": 1529513606000,
                "value": 270
            },
            {
                "ms": 1529513666000,
                "value": 270
            },
            {
                "ms": 1529513726000,
                "value": 270
            },
            {
                "ms": 1529513786000,
                "value": 270
            },
            {
                "ms": 1529513846000,
                "value": 270
            },
            {
                "ms": 1529513906000,
                "value": 270
            },
            {
                "ms": 1529513966000,
                "value": 280
            },
            {
                "ms": 1529514026000,
                "value": 290
            },
            {
                "ms": 1529514086000,
                "value": 300
            },
            {
                "ms": 1529514146000,
                "value": 300
            },
            {
                "ms": 1529514206000,
                "value": 300
            },
            {
                "ms": 1529514266000,
                "value": 300
            },
            {
                "ms": 1529514326000,
                "value": 300
            },
            {
                "ms": 1529514386000,
                "value": 300
            },
            {
                "ms": 1529514446000,
                "value": 300
            },
            {
                "ms": 1529514506000,
                "value": 300
            },
            {
                "ms": 1529514566000,
                "value": 300
            },
            {
                "ms": 1529514626000,
                "value": 300
            },
            {
                "ms": 1529514686000,
                "value": 300
            },
            {
                "ms": 1529514746000,
                "value": 300
            },
            {
                "ms": 1529514806000,
                "value": 300
            },
            {
                "ms": 1529514866000,
                "value": 300
            },
            {
                "ms": 1529514926000,
                "value": 300
            },
            {
                "ms": 1529514986000,
                "value": 300
            },
            {
                "ms": 1529515046000,
                "value": 300
            },
            {
                "ms": 1529515106000,
                "value": 300
            },
            {
                "ms": 1529515166000,
                "value": 300
            },
            {
                "ms": 1529515226000,
                "value": 300
            },
            {
                "ms": 1529515286000,
                "value": 300
            },
            {
                "ms": 1529515346000,
                "value": 300
            },
            {
                "ms": 1529515406000,
                "value": 300
            },
            {
                "ms": 1529515466000,
                "value": 300
            },
            {
                "ms": 1529515526000,
                "value": 300
            },
            {
                "ms": 1529515586000,
                "value": 300
            },
            {
                "ms": 1529515646000,
                "value": 300
            },
            {
                "ms": 1529515706000,
                "value": 300
            },
            {
                "ms": 1529515766000,
                "value": 300
            },
            {
                "ms": 1529515826000,
                "value": 300
            },
            {
                "ms": 1529515886000,
                "value": 300
            },
            {
                "ms": 1529515946000,
                "value": 300
            },
            {
                "ms": 1529516006000,
                "value": 300
            },
            {
                "ms": 1529516066000,
                "value": 300
            },
            {
                "ms": 1529516126000,
                "value": 300
            },
            {
                "ms": 1529516186000,
                "value": 300
            },
            {
                "ms": 1529516246000,
                "value": 300
            },
            {
                "ms": 1529516306000,
                "value": 300
            },
            {
                "ms": 1529516366000,
                "value": 300
            },
            {
                "ms": 1529516426000,
                "value": 300
            },
            {
                "ms": 1529516486000,
                "value": 300
            },
            {
                "ms": 1529516546000,
                "value": 300
            },
            {
                "ms": 1529516606000,
                "value": 300
            },
            {
                "ms": 1529516666000,
                "value": 300
            },
            {
                "ms": 1529516726000,
                "value": 300
            },
            {
                "ms": 1529516786000,
                "value": 300
            },
            {
                "ms": 1529516846000,
                "value": 300
            },
            {
                "ms": 1529516906000,
                "value": 300
            },
            {
                "ms": 1529516966000,
                "value": 300
            },
            {
                "ms": 1529517026000,
                "value": 300
            },
            {
                "ms": 1529517086000,
                "value": 300
            },
            {
                "ms": 1529517146000,
                "value": 300
            },
            {
                "ms": 1529517206000,
                "value": 300
            },
            {
                "ms": 1529517266000,
                "value": 300
            },
            {
                "ms": 1529517326000,
                "value": 300
            },
            {
                "ms": 1529517386000,
                "value": 300
            },
            {
                "ms": 1529517446000,
                "value": 300
            },
            {
                "ms": 1529517506000,
                "value": 300
            },
            {
                "ms": 1529517566000,
                "value": 300
            },
            {
                "ms": 1529517626000,
                "value": 300
            },
            {
                "ms": 1529517686000,
                "value": 300
            },
            {
                "ms": 1529517746000,
                "value": 300
            },
            {
                "ms": 1529517806000,
                "value": 300
            },
            {
                "ms": 1529517866000,
                "value": 300
            },
            {
                "ms": 1529517926000,
                "value": 300
            },
            {
                "ms": 1529517986000,
                "value": 300
            },
            {
                "ms": 1529518046000,
                "value": 300
            },
            {
                "ms": 1529518106000,
                "value": 300
            },
            {
                "ms": 1529518166000,
                "value": 300
            },
            {
                "ms": 1529518226000,
                "value": 300
            },
            {
                "ms": 1529518286000,
                "value": 300
            },
            {
                "ms": 1529518346000,
                "value": 300
            },
            {
                "ms": 1529518406000,
                "value": 300
            },
            {
                "ms": 1529518466000,
                "value": 300
            },
            {
                "ms": 1529518526000,
                "value": 300
            },
            {
                "ms": 1529518586000,
                "value": 300
            },
            {
                "ms": 1529518646000,
                "value": 300
            },
            {
                "ms": 1529518706000,
                "value": 300
            },
            {
                "ms": 1529518766000,
                "value": 300
            },
            {
                "ms": 1529518826000,
                "value": 300
            },
            {
                "ms": 1529518886000,
                "value": 300
            },
            {
                "ms": 1529518946000,
                "value": 300
            },
            {
                "ms": 1529519006000,
                "value": 300
            },
            {
                "ms": 1529519066000,
                "value": 300
            },
            {
                "ms": 1529519126000,
                "value": 300
            },
            {
                "ms": 1529519186000,
                "value": 300
            },
            {
                "ms": 1529519246000,
                "value": 300
            },
            {
                "ms": 1529519306000,
                "value": 300
            },
            {
                "ms": 1529519366000,
                "value": 300
            },
            {
                "ms": 1529519426000,
                "value": 300
            },
            {
                "ms": 1529519486000,
                "value": 300
            },
            {
                "ms": 1529519546000,
                "value": 300
            },
            {
                "ms": 1529519606000,
                "value": 300
            },
            {
                "ms": 1529519666000,
                "value": 300
            },
            {
                "ms": 1529519726000,
                "value": 300
            },
            {
                "ms": 1529519786000,
                "value": 300
            },
            {
                "ms": 1529519846000,
                "value": 300
            },
            {
                "ms": 1529519906000,
                "value": 300
            },
            {
                "ms": 1529519966000,
                "value": 300
            },
            {
                "ms": 1529520026000,
                "value": 300
            },
            {
                "ms": 1529520086000,
                "value": 300
            },
            {
                "ms": 1529520146000,
                "value": 300
            },
            {
                "ms": 1529520206000,
                "value": 300
            },
            {
                "ms": 1529520266000,
                "value": 300
            },
            {
                "ms": 1529520326000,
                "value": 300
            },
            {
                "ms": 1529520386000,
                "value": 300
            },
            {
                "ms": 1529520446000,
                "value": 300
            },
            {
                "ms": 1529520506000,
                "value": 300
            },
            {
                "ms": 1529520566000,
                "value": 300
            },
            {
                "ms": 1529520626000,
                "value": 300
            },
            {
                "ms": 1529520686000,
                "value": 300
            },
            {
                "ms": 1529520746000,
                "value": 300
            },
            {
                "ms": 1529520806000,
                "value": 300
            },
            {
                "ms": 1529520866000,
                "value": 300
            },
            {
                "ms": 1529520926000,
                "value": 300
            },
            {
                "ms": 1529520986000,
                "value": 300
            },
            {
                "ms": 1529521046000,
                "value": 300
            },
            {
                "ms": 1529521106000,
                "value": 300
            },
            {
                "ms": 1529521166000,
                "value": 300
            },
            {
                "ms": 1529521226000,
                "value": 300
            },
            {
                "ms": 1529521286000,
                "value": 300
            },
            {
                "ms": 1529521346000,
                "value": 300
            },
            {
                "ms": 1529521406000,
                "value": 300
            },
            {
                "ms": 1529521466000,
                "value": 300
            },
            {
                "ms": 1529521526000,
                "value": 300
            },
            {
                "ms": 1529521586000,
                "value": 300
            },
            {
                "ms": 1529521646000,
                "value": 300
            },
            {
                "ms": 1529521706000,
                "value": 300
            },
            {
                "ms": 1529521766000,
                "value": 300
            },
            {
                "ms": 1529521826000,
                "value": 300
            },
            {
                "ms": 1529521886000,
                "value": 300
            },
            {
                "ms": 1529521946000,
                "value": 300
            },
            {
                "ms": 1529522006000,
                "value": 300
            },
            {
                "ms": 1529522066000,
                "value": 300
            },
            {
                "ms": 1529522126000,
                "value": 300
            },
            {
                "ms": 1529522186000,
                "value": 300
            },
            {
                "ms": 1529522246000,
                "value": 300
            },
            {
                "ms": 1529522306000,
                "value": 290
            },
            {
                "ms": 1529522366000,
                "value": 280
            },
            {
                "ms": 1529522426000,
                "value": 270
            },
            {
                "ms": 1529522486000,
                "value": 260
            },
            {
                "ms": 1529522546000,
                "value": 260
            },
            {
                "ms": 1529522606000,
                "value": 260
            },
            {
                "ms": 1529522666000,
                "value": 260
            },
            {
                "ms": 1529522726000,
                "value": 260
            },
            {
                "ms": 1529522786000,
                "value": 260
            },
            {
                "ms": 1529522846000,
                "value": 260
            },
            {
                "ms": 1529522906000,
                "value": 260
            },
            {
                "ms": 1529522966000,
                "value": 260
            },
            {
                "ms": 1529523026000,
                "value": 260
            },
            {
                "ms": 1529523086000,
                "value": 260
            },
            {
                "ms": 1529523146000,
                "value": 260
            },
            {
                "ms": 1529523206000,
                "value": 260
            },
            {
                "ms": 1529523266000,
                "value": 260
            },
            {
                "ms": 1529523326000,
                "value": 260
            },
            {
                "ms": 1529523386000,
                "value": 260
            },
            {
                "ms": 1529523446000,
                "value": 260
            },
            {
                "ms": 1529523506000,
                "value": 260
            },
            {
                "ms": 1529523566000,
                "value": 260
            },
            {
                "ms": 1529523626000,
                "value": 260
            },
            {
                "ms": 1529523686000,
                "value": 260
            },
            {
                "ms": 1529523746000,
                "value": 260
            },
            {
                "ms": 1529523806000,
                "value": 260
            },
            {
                "ms": 1529523866000,
                "value": 260
            },
            {
                "ms": 1529523926000,
                "value": 260
            },
            {
                "ms": 1529523986000,
                "value": 260
            },
            {
                "ms": 1529524046000,
                "value": 260
            },
            {
                "ms": 1529524106000,
                "value": 260
            },
            {
                "ms": 1529524166000,
                "value": 260
            },
            {
                "ms": 1529524226000,
                "value": 260
            },
            {
                "ms": 1529524286000,
                "value": 260
            },
            {
                "ms": 1529524346000,
                "value": 260
            },
            {
                "ms": 1529524406000,
                "value": 260
            },
            {
                "ms": 1529524466000,
                "value": 260
            },
            {
                "ms": 1529524526000,
                "value": 260
            },
            {
                "ms": 1529524586000,
                "value": 260
            },
            {
                "ms": 1529524646000,
                "value": 260
            }
        ];

        var demoDischarges = [
            {"ms": 1529504906000, "dischargeType": "faucet", "amount": 20},
            {"ms": 1529506586000, "dischargeType": "rain", "amount": 30},
            {"ms": 1529522186000, "dischargeType": "rain", "amount": 40},
            {"ms": 1529525966000, "dischargeType": "rain", "amount": 60},
            {"ms": 1529536886000, "dischargeType": "rain", "amount": 450}
        ];


        var demoUserBuffered = 64000;

        var demoAvgBuffered = 460000;

        var demoBufferInfo = {
            "address": "Drienerlolaan 5",
            "waterTemp": 22,
            "capacity": 300,
            "level": 260
        };

        var demoNotifications = [
            {
                "severity": 1,
                "title": "Risk of legionella!",
                "content": "Due to the temperature in your buffer, there is a risk of legionella developing. Please be careful when using the water for garden use."
            },
            {
                "severity": 2,
                "title": "Filter needs to be replaced",
                "content": "The inlet filter in your buffer has exceeded it's useful life. Please view the instructions in the instruction manual to learn how to replace the filter."
            }
        ];

        if ($(window).width() < 480) {
            $("#notificationCollapsible").addClass("collapse");
        }

        var interfaceStartTime = 1529524646000;

        this.bufferCapacity = demoBufferInfo.capacity;

        var parsedDischarges = this.parseDischarges(demoDischarges, demoData, 1529524646000, 36000000);

        console.log(parsedDischarges);

        this.createCompetitiveGraphic(demoUserBuffered, demoAvgBuffered, '#competitiveChart', '#srb__competitive #compliment', '#srb__competitive #details');

        this.createFillLevelGraphic(parsedDischarges.fillLevel, parsedDischarges.eventsList, parsedDischarges.showers, '#chart1', 1529524646000, 7200000);
        //this.createRainfallGraph(parsedDischarges.showers, '#rainfallChart', 1529524646000, 3000000);

        this.createTimeline(parsedDischarges.timeline, '#timeline', 1529524646000);

        this.setBufferInfo(demoBufferInfo, "srb__status");
        this.setStatus(demoNotifications);
    },

    valueAtMs: function (ms, array) {
        for (var i = 0; i < array.length; i++) {
            if (i === array.length - 1) {
                return array[i].value;
            }

            if (ms > array[i].ms && ms < array[i + 1].ms) {
                return array[i].value;
            }
        }
    },

    setBufferInfo: function (infoData, element) {
        console.log(infoData);
        $("#address").text(infoData.address);
        $("#wTemperature").html(infoData.waterTemp + " &#8451;");

        var waterHealthy = true;

        if (infoData.waterTemp > 20) waterHealthy = false;

        $("#wHealth").html(waterHealthy ? "Good" : "Risk of legionella <i class=\"fas fa-info-circle\" id='waterhealthTooltip'></i>");
        $('#waterhealthTooltip').tooltip({
            'title': "The temperature in your buffer is currently above 20 degrees. At this temperature, legionella is likely to develop. Please be careful when using the water yourself!"
        });

        srb.setCurrentLevel(infoData.level, infoData.capacity, waterHealthy);
    },

    setCurrentLevel: function (current, total, health) {
        var graphic_fillLevel_height = 435;

        d3.select('#srb__status_graphic_fillLevel').transition().duration(500).attr('height', (graphic_fillLevel_height * (current / total)) + 'px').style("fill", (health ? '#39c' : '#FF9600'));
        d3.select('#srb__status_graphic_fillPercentage').text(Math.ceil((current / total) * 100) + ' %');
        d3.select('#srb__status_graphic_fillLiters').text('(' + Math.ceil(current) + ' / ' + Math.ceil(total) + ' L)');
    },

    setStatus: function (notifications) {
        var statusIndicator = $("#status-indicator");
        var notificationsElement = $("#notifications");

        var statusTextArray = ['ok', 'warning', 'error'];

        var status = 0;

        var notificationsContent = "";

        if (notifications.length > 0) {
            notificationsContent += '<ul class="list-group">';

            for(var i = 0; i < notifications.length; i++) {
                if (notifications[i].severity > status) status = notifications[i].severity;

                notificationsContent += "<li class='list-group-item'><div class='notifications-container " + statusTextArray[notifications[i].severity] + "'><strong>" + notifications[i].title + "</strong><br>" + notifications[i].content + "</div></li>";
            }

            notificationsContent += '</ul>';
        } else {
            notificationsContent = "<center>There are currently no notifications.<br>Everything's good <i class=\"far fa-smile-beam\"></i></center>";
        }

        var statusText = statusTextArray[status];

        $("#status-text").text(statusText.charAt(0).toUpperCase() + statusText.slice(1));

        statusIndicator.removeClass();
        statusIndicator.addClass(statusText);

        notificationsElement.html(notificationsContent);
    },

    parseDischarges: function (discharges, fillLevel, now, futureParseLimit) {
        var eventsList = [];
        var timeline = [];
        var showers = [];

        var fillDelta = [];

        showers.push({"ms": fillLevel[0].ms, "value": 0});

        for (var i = 0; i < discharges.length; i++) {
            var d = discharges[i];

            fillDelta.push({
                "ms": now + 1,
                "delta": 0
            });

            if (d.dischargeType === "rain") {
                var rainTime = d.ms + this.defaultDischargeTime;

                eventsList.push({
                    "ms": d.ms,
                    "event": "Buffer discharged to make room for rainfall starting at " + moment(rainTime).format("H:mm") + " with an expected amount of " + d.amount + " liters." + ((d.amount > srb.bufferCapacity) ? " This will exceed the buffer capacity by " + (d.amount - srb.bufferCapacity) + " liters." : "")
                });

                eventsList.push({
                    "ms": rainTime,
                    "event": "Rainfall started. The buffer made capacity available for  " + d.amount + " liters at " + moment(d.ms).format("H:mm") + " in preparation for this rainfall." + ((d.amount > srb.bufferCapacity) ? " This exceeds the buffer capacity, causing " + (d.amount - srb.bufferCapacity) + " liters to overflow." : "")
                });

                if (d.ms > now) {
                    fillDelta.push({
                        "ms": d.ms,
                        "delta": 0
                    });

                    fillDelta.push({
                        "ms": d.ms + 300000,
                        "delta": -d.amount
                    });
                }

                if (rainTime > now) {
                    fillDelta.push({
                        "ms": rainTime,
                        "delta": 0
                    });

                    fillDelta.push({
                        "ms": rainTime + 300000,
                        "delta": d.amount
                    });
                }

                showers.push({
                    "ms": rainTime - 300000,
                    "value": 0
                });

                showers.push({
                    "ms": rainTime - 150000,
                    "value": d.amount
                });

                showers.push({
                    "ms": rainTime + 150000,
                    "value": d.amount
                });

                showers.push({
                    "ms": rainTime + 300000,
                    "value": 0
                });
            }

            if (d.dischargeType === "faucet") {
                eventsList.push({
                    "ms": d.ms,
                    "event": "The faucet on your buffer was used to empty " + d.amount + " liters."
                });
            }
        }

        fillDelta.push({
            "ms": now + futureParseLimit,
            "delta": 0
        });


        // Sort fillDelta
        fillDelta = fillDelta.sort(function (a, b) {
            return a.ms - b.ms;
        });

        // Add fillDelta to fillLevel
        for (var i = 0; i < fillDelta.length; i++) {
            var newFillLevel = fillLevel[fillLevel.length - 1].value + fillDelta[i].delta;

            if(newFillLevel > srb.bufferCapacity) newFillLevel = srb.bufferCapacity;
            if(newFillLevel < 0) newFillLevel = 0;

            fillLevel.push({
                "ms": fillDelta[i].ms,
                "value": newFillLevel
            });
        }

        // Sort fillLevel
        fillLevel = fillLevel.sort(function (a, b) {
            return a.ms - b.ms;
        });

        for (var i = 0; i < eventsList.length; i++) {
            timeline.push({
                "ms": eventsList[i].ms - 1,
                "type": "fillLevel",
                "value": srb.valueAtMs(eventsList[i].ms - 1, fillLevel)
            });

            timeline.push({
                "ms": eventsList[i].ms,
                "type": "event",
                "value": eventsList[i].event
            });
        }

        timeline.push({
            "ms": fillLevel[fillLevel.length - 1].ms,
            "type": "fillLevel",
            "value": fillLevel[fillLevel.length - 1].value
        });

        timeline = timeline.sort(function (a, b) {
            return a.ms - b.ms;
        });

        showers.push({
            "ms": now + futureParseLimit,
            "value": 0
        });

        return {
            "fillLevel": fillLevel,
            "eventsList": eventsList,
            "timeline": timeline,
            "showers": showers
        };
    },

    createCompetitiveGraphic: function (userData, avgData, element, complimentElement, detailsElement) {
        $(complimentElement).text("Great job!");
        $(detailsElement).text("Together, we kept " + avgData + " L out of the sewers during rain. Your neighbourhood was responsible for " + Math.round((userData / avgData) * 100) + " % of this.");

        new Chartist.Pie(element, {
            series: [{
                data: userData,
                className: 'user'
            }, {
                data: avgData,
                className: 'avg'
            }]
        }, {
            donut: true,
            donutWidth: 50,
            startAngle: 270,
            total: (userData + avgData) * 2,
            showLabel: false
        }).on('draw', function () {
            var chartEl = $(element + ' .ct-chart-donut');
            chartEl.removeAttr('style');
            chartEl.height(chartEl.height() / 2);
        });


    },

    createFillLevelGraphic: function (data, events, showers, element, currentDt, accurateMs) {
        var allGraphData = [];
        var pastGraphData = [];
        var futureAccGraphData = [];
        var futureEstGraphData = [];

        var showerGraphData = [];

        var eventsGraphData = [];

        data.push({"ms": currentDt + accurateMs - 1, "value": srb.valueAtMs(currentDt + accurateMs - 1, data)});

        // Sort fillLevel
        data = data.sort(function (a, b) {
            return a.ms - b.ms;
        });

        for (var i = 0; i < data.length; i++) {
            var d = data[i];

            var formattedData = {x: new Date(d.ms), y: d.value};

            allGraphData.push(formattedData);

            if (d.ms <= currentDt) {
                pastGraphData.push(formattedData);
            } else if (d.ms > currentDt && d.ms < currentDt + accurateMs) {
                if (futureAccGraphData.length === 0) futureAccGraphData.push(pastGraphData[pastGraphData.length - 1]);
                futureAccGraphData.push(formattedData);
            } else {
                if (futureEstGraphData.length === 0) futureEstGraphData.push(futureAccGraphData[futureAccGraphData.length - 1]);
                futureEstGraphData.push(formattedData);
            }
        }

        // Rainfall processing

        showers.push({"ms": currentDt - 1, "value": srb.valueAtMs(currentDt - 1, showers)});
        showers.push({"ms": currentDt, "value": srb.valueAtMs(currentDt, showers)});
        showers.push({
            "ms": currentDt + accurateMs - 1,
            "value": srb.valueAtMs(currentDt + accurateMs - 1, showers)
        });
        showers.push({
            "ms": currentDt + accurateMs,
            "value": srb.valueAtMs(currentDt + accurateMs - 1, showers)
        });

        // Sort fillLevel
        showers = showers.sort(function (a, b) {
            return a.ms - b.ms;
        });

        var maxShower = 0;

        for (var i = 0; i < showers.length; i++) {
            var d = showers[i];
            var formattedData = {x: new Date(d.ms), y: d.value};

            showerGraphData.push(formattedData);
            if(d.value > maxShower) maxShower = d.value;
        }

        // End rainfall processing

        if (events) {
            for (var i = 0; i < events.length; i++) {
                var e = events[i];

                var selectIndex = null;

                for (var j = 0; j < data.length; j++) {
                    if (j === data.length - 2) {
                        selectIndex = data.length - 2;
                        break;
                    }

                    if (e.ms >= data[j].ms && e.ms < data[j + 1].ms) {
                        selectIndex = j;
                        break;
                    }
                }

                eventsGraphData.push({x: new Date(data[selectIndex].ms), y: data[selectIndex].value, meta: e.event});
            }
        }

        new Chartist.Line(element, {
            series: [
                {
                    data: pastGraphData,
                    className: 'past',
                    name: 'Past'
                },
                {
                    data: futureAccGraphData,
                    className: 'future-accurate',
                    name: '2-hour prediction'
                },
                {
                    data: futureEstGraphData,
                    className: 'future-estimated',
                    name: '10-hour prediction'
                },
                {
                    data: showerGraphData,
                    className: 'rainfall',
                    name: 'Rainfall'
                },
                {
                    data: eventsGraphData,
                    className: 'event',
                    name: 'Event'
                },
                {
                    data: [{
                        x: new Date(currentDt),
                        y: 0
                    }],
                    className: 'now'
                }
            ]
        }, {
            showArea: true,
            low: 0,
            high: (srb.bufferCapacity < maxShower) ? maxShower : srb.bufferCapacity,
            fullWidth: true,
            height: '400px',
            axisX: {
                type: Chartist.FixedScaleAxis,
                divisor: 6,
                labelInterpolationFnc: function (value) {
                    return moment(value).format('H:mm');
                }
            },
            axisY: {
                labelInterpolationFnc: function (value) {
                    console.log(srb.bufferCapacity);
                    return Math.round(((value / srb.bufferCapacity) * 100)) + '%';
                },
                divisor: 5
            },
            plugins: [
                Chartist.plugins.legend({
                    clickable: false,
                    classNames: ['past', 'future-accurate', 'future-estimated', 'rainfall', 'event'],
                    legendNames: ['Past', '2-hour prediction', '10-hour prediction', 'Rainfall', 'Event']
                }),
                Chartist.plugins.ctThreshold({
                    threshold: srb.bufferCapacity + 1
                })
            ]
        }).on("draw", function (data) {
            if (data.type === "point" && data.series.className === 'event') {
                data.element._node.setAttribute("data-content", data.meta);
                data.element._node.setAttribute("data-title", moment(data.value.x).format('H:mm'))
            }

            if (data.type === "point" && data.series.className === 'now') {
                data.element._node.setAttribute('y2', 10);
            }
        }).on("created", function () {
            // Initiate Tooltip
            $(element).popover({
                selector: '.event .ct-point',
                container: 'body',
                html: true,
                trigger: 'hover',
                offset: '0, 5px'
            });
        });
    },

    createRainfallGraph: function (rainfallData, element, currentDt, accurateMs) {
        rainfallData.push({"ms": currentDt - 1, "value": srb.valueAtMs(currentDt - 1, rainfallData)});
        rainfallData.push({"ms": currentDt, "value": srb.valueAtMs(currentDt, rainfallData)});
        rainfallData.push({
            "ms": currentDt + accurateMs - 1,
            "value": srb.valueAtMs(currentDt + accurateMs - 1, rainfallData)
        });
        rainfallData.push({
            "ms": currentDt + accurateMs,
            "value": srb.valueAtMs(currentDt + accurateMs - 1, rainfallData)
        });

        // Sort fillLevel
        rainfallData = rainfallData.sort(function (a, b) {
            return a.ms - b.ms;
        });

        var allGraphData = [];
        var pastGraphData = [];
        var futureAccGraphData = [];
        var futureEstGraphData = [];

        for (var i = 0; i < rainfallData.length; i++) {
            var d = rainfallData[i];

            var formattedData = {x: new Date(d.ms), y: d.value};

            allGraphData.push(formattedData);

            if (d.ms <= currentDt) {
                pastGraphData.push(formattedData);
            } else if (d.ms > currentDt && d.ms < currentDt + accurateMs) {
                if (futureAccGraphData.length === 0) futureAccGraphData.push(pastGraphData[pastGraphData.length - 1]);
                futureAccGraphData.push(formattedData);
            } else {
                if (futureEstGraphData.length === 0) futureEstGraphData.push(futureAccGraphData[futureAccGraphData.length - 1]);
                futureEstGraphData.push(formattedData);
            }
        }

        console.log(pastGraphData);

        new Chartist.Line(element, {
            series: [
                {
                    data: pastGraphData,
                    className: 'past',
                    name: 'Past'
                },
                {
                    data: futureAccGraphData,
                    className: 'future-accurate',
                    name: '2-hour prediction'
                },
                {
                    data: futureEstGraphData,
                    className: 'future-estimated',
                    name: '10-hour prediction'
                },
                {
                    data: [{
                        x: new Date(currentDt),
                        y: 0
                    }],
                    className: 'now'
                }
            ]
        }, {
            showArea: true,
            low: 0,
            fullWidth: true,
            height: '300px',
            axisX: {
                type: Chartist.FixedScaleAxis,
                divisor: 6,
                labelInterpolationFnc: function (value) {
                    return moment(value).format('H:mm');
                }
            },
            plugins: [
                Chartist.plugins.legend({
                    clickable: false,
                    classNames: ['past', 'future-accurate', 'future-estimated', 'event'],
                    legendNames: ['Past', '2-hour prediction', '10-hour prediction', 'Event']
                })
            ]
        }).on("draw", function (data) {
            if (data.type === "point" && data.series.className === 'now') {
                data.element._node.setAttribute('y2', 10);
            }
        });
    },

    createTimeline: function (timelineData, element, now) {
        var e = $(element);

        e.html("");

        for (var i = 0; i < timelineData.length; i++) {
            var t = timelineData[i];

            if (t.type === "event") {
                e.append('<li class="event"><strong>' + moment(t.ms).format('H:mm') + '</strong><br>' + t.value + '</li>');
            }

            if (t.type === "fillLevel") {
                e.append('<li class="fillLevel">' + Math.round((t.value / srb.bufferCapacity) * 100) + ' % full</li>')
            }

            if (t.ms < now && i < timelineData.length - 1 && timelineData[i + 1].ms > now) {
                e.append('<li class="now">now</li>');
            }
        }
    }
};

var srbSetup = {

};