import React, { useState, useEffect } from 'react';

const FinalSection = () => {
  const [coachMessage, setCoachMessage] = useState('');
  const [countDown, setCountDown] = useState(3);

  /* ================= Countdown ================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          window.location.href = '/me/home';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  /* ================= Generate Message ================= */
  useEffect(() => {
    generateCoachMessage();
  }, []);

  

  const generateCoachMessage = () => {
    const getCurrentWeight = parseFloat(localStorage.getItem('currentWeight') || '0');
    const getTargetWeight = parseFloat(localStorage.getItem('targetWeight') || '0');
    const getHeight = parseFloat(localStorage.getItem('height') || '0');
    const getGender = localStorage.getItem('SelectedGender') || 'ذكر';
    const SatisfactionRate = parseInt(localStorage.getItem('SatisfactionRate') || '0');
    const Age = parseInt(localStorage.getItem('age') || '0');

    const greeting = getGender === 'ذكر' ? 'يا بطل' : 'يا بطلة';

    let bmi = 0;
    let bmiCategory = '';
    let weightDiff = 0;

    if (getCurrentWeight > 0 && getHeight > 0) {
      const heightInM = getHeight / 100;
      bmi = getCurrentWeight / (heightInM * heightInM);
      weightDiff = getCurrentWeight - getTargetWeight;

      if (bmi < 18.5) bmiCategory = 'ناقص الوزن';
      else if (bmi < 25) bmiCategory = 'وزن صحي';
      else if (bmi < 30) bmiCategory = 'وزن زائد';
      else bmiCategory = 'سمنة';
    }

    let message = ''; // البدء بالتحية الأساسية
    message += `عاش ${greeting}، انت خطيت${getGender === 'ذكر' ? '' : 'ي'} أول خطوة في طريق النجاح بإذن الله.\n\n`;

    // إضافة التشخيص المناسب حسب BMI
    if (bmiCategory === 'سمنة' && weightDiff > 10) {
      message += `هو وزنك زايد شوية بس إن شاء الله تكون قد التحدي وتتحسن بسرعة، أو على الأقل في غضون 3 شهور.`;
    } else if (bmiCategory === 'وزن زائد' && weightDiff > 5) {
      message += `محتاج تخس ${weightDiff.toFixed(0)} كجم بس، وهتوصل لهدفك بسرعة إن شاء الله.`;
    } else if (weightDiff > 0) {
      message += `محتاج تخس ${weightDiff.toFixed(0)} كجم بس، وهتوصل لهدفك قريب.`;
    } else if (weightDiff < 0) {
      message += `محتاج تزيد ${Math.abs(weightDiff).toFixed(0)} كجم، وهتوصل${getGender === 'ذكر' ? '' : 'ي'} لهدفك بسهولة.`;
    } else {
      message += `أنت على الطريق الصحيح. استمر${getGender === 'ذكر' ? ' ' : 'ي'} وسنصل للهدف قريباً.`;
    }

    message += `\nأهم حاجة تتوكل${getGender === 'ذكر' ? '' : 'ي'} على الله وتعمل اللي عليك.`;
    message += `\n ومتخليش كلام الناس ليه تأثير عليك${getGender === 'ذكر' ? '' : 'ي'}، انت${getGender === 'ذكر' ? '' : 'ي'} أقوي من أن حد يأثر عليك${getGender === 'ذكر' ? '' : 'ي'} بكلام تافه زي ده.`;

    // إضافة النصيحة النفسية إذا كان معدل الرضا منخفض
    if (SatisfactionRate <= 7) {
      message += `وعايزك متكره${getGender === 'ذكر' ? 'ش' : 'يش'} نفسك ولا تستصغرها قدام الناس، ${getGender === 'ذكر' ? 'انت إنسان قوي وجميل في جميع الأحيان' : 'انتِ إنسانة قوية وجميلة في جميع الأحيان'} ومش قليل${getGender === 'ذكر' ? '' : 'ة'} إطلاقاً.`;
    } else {
      message += `وأنا مبسوط${getGender === 'ذكر' ? '' : 'ة'} إنك راضي${getGender === 'ذكر' ? '' : 'ة'} عن نفسك، وده هيخليك${getGender === 'ذكر' ? '' : 'ي'} تحقق أهدافك أسرع بكتير.`;
    }

    // إضافة نصيحة عملية حسب العمر
    if (Age > 40) {
      message += `خد راحتك وامشي بالتدريج عشان صحتك.`;
    } else if (Age < 25) {
      message += `استغل شبابك وهمتك عاليين دلوقتي.`;
    }

    message += `\nعايزك تبعد${getGender === 'ذكر' ? ' عن التسويف وتجدول نفسك في الواقع' : 'ي عن التسويف وتجدولي نفسك في الواقع'} بردو مش في التطبيق بس، وإن شاء الله ${getGender === 'ذكر' ? 'وزنك وجسمك يبقى أحلى' : 'وزنك يبقى كويس ❤︎₊ ⊹'}.`;
    message += `\n\n...اتوكلت${getGender === 'ذكر' ? '' : 'ي'} على الله؟`;

    setCoachMessage(message);
  };

  return (
    <div className="w-full min-h-screen px-3 sm:px-6 show-third">
      <div className="text-center text-sm sm:text-base mt-2">
        <p>سيتم نقلك للصفحة التالية بعد {countDown}</p>
      </div>

      <div className="flex items-center flex-col mt-6 sm:mt-10">
        <h2 className="text-2xl sm:text-3xl text-indigo-400 font-extrabold mb-4 text-center">
          تمام! خلصنا
        </h2>

        <div className="max-w-lg mx-auto bg-white rounded-xl p-6 shadow border-4 border-teal-100">
          <h4 className="text-teal-400 text-center mb-2">كلمتين مني..</h4>

          <div className="whitespace-pre-line text-black text-center text-lg">
            {coachMessage}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalSection;
  