// Change this date to your next anniversary (year, month - 1, day).
const anniversaryDate = new Date(2026, 7, 11, 0, 0, 0);

const fields = {
  days: document.querySelector('#days'),
  hours: document.querySelector('#hours'),
  minutes: document.querySelector('#minutes'),
  seconds: document.querySelector('#seconds')
};


const khmerTranslations = {
  '.nav nav a:nth-child(1)': 'រឿងរបស់យើង',
  '.nav nav a:nth-child(2)': 'អនុស្សាវរីយ៍',
  '.nav nav a:nth-child(3)': 'សំបុត្ររបស់ខ្ញុំ',
  '.hero-copy .eyebrow': 'អបអរសាទរសេចក្តីស្រឡាញ់របស់យើង · ចាប់តាំងពីឆ្នាំ ២០២៥',
  '.hero-copy h1': 'នៅតែជ្រើសរើស<br><em>អ្នក</em>',
  '.hero-copy .intro': 'រាល់ថ្ងៃដែលមានអ្នក ប្រៀបដូចជាទំព័រមួយនៃរឿងដែលខ្ញុំស្រឡាញ់បំផុត។<br>សម្រាប់អ្វីៗដែលយើងបានឆ្លងកាត់ និងអ្វីៗដែលនឹងមកដល់។',
  '.hero-copy .button': 'រំលឹកអនុស្សាវរីយ៍ <span>↓</span>',
  '.love-quote blockquote': '“ក្នុងលោកនេះ គ្មានបេះដូងណាសម្រាប់ខ្ញុំ ដូចបេះដូងរបស់អ្នកឡើយ។”',
  '.countdown-section .script': 'រហូតដល់ជំពូកបន្ទាប់របស់យើង',
  '#days + span': 'ថ្ងៃ', '#hours + span': 'ម៉ោង', '#minutes + span': 'នាទី', '#seconds + span': 'វិនាទី',
  '.countdown-date': 'រហូតដល់ថ្ងៃទី ១១ ខែសីហា ឆ្នាំ ២០២៦',
  '#story .section-heading .eyebrow': 'របៀបដែលអ្វីៗបានចាប់ផ្តើម',
  '#story .section-heading h2': 'រឿង<em>ស្នេហារបស់យើង</em>',
  '#story .section-heading > p:last-child': 'ពេលវេលាខ្លះបានផ្លាស់ប្តូរអ្វីៗដោយស្ងាត់ៗ។ ទាំងនេះជាអនុស្សាវរីយ៍របស់យើង។',
  '.moment:nth-child(1) h3': 'ថ្ងៃដែលយើងបានជួបគ្នា',
  '.moment:nth-child(1) > p:last-child': 'នៅថ្ងៃនោះ ពួកយើងមានកិច្ចការមួយសម្រាប់មុខវិជ្ជា SP។ ពួកយើងបានធ្វើដំណើរទៅឧដុង្គជាមួយគ្នា ដើម្បីថត MV សម្រាប់បទចម្រៀង «រៀនចប់»។ វាបានក្លាយជាអនុស្សាវរីយ៍ដ៏ពិសេសមួយ ដែលខ្ញុំនៅតែចងចាំរហូតមកដល់សព្វថ្ងៃនេះ។',
  '.moment:nth-child(2) h3': 'ធ្លាក់ក្នុងអន្លងស្នេហា​កាន់តែខ្លាំង',
  '.moment:nth-child(2) > p:last-child': 'លើកដំបូងដែលពួកយើងបានជជែកគ្នា អ្វីៗហាក់ដូចជាធម្មជាតិ និងសប្បាយរីករាយខ្លាំងណាស់។ ការសន្ទនាដ៏សាមញ្ញនោះ បានក្លាយជាចំណុចចាប់ផ្តើមនៃរឿងរ៉ាវដ៏ពិសេសរបស់យើង។ការសន្ទនារបស់ពួកយើងបានចាប់ផ្តើមនៅពេលដែលខ្ញុំបាន Reply ទៅ Story របស់អ្នកថា «Jom, sahav mles!» ហើយអ្នកក៏បានឆ្លើយតបមកខ្ញុំវិញត្រឹមតែមួយម៉ាត់ថា «ស្ទាវ»',
  '.moment:nth-child(3) h3': 'ថ្ងៃដែលបងសារភាព',
  '.moment:nth-child(3) > p:last-child': 'វង្វេងផ្លូវ សើចជាមួយគ្នា និងដឹងថាគ្រប់ទីកន្លែងអាចជាផ្ទះ នៅពេលមានអ្នក។',
  '.moment:nth-child(4) h3': 'ថ្ងៃដែលបងបានសារភាព',
  '.moment:nth-child(4) > p:last-child': 'ខ្ញុំនៅតែចងចាំថ្ងៃដែលខ្ញុំប្រមូលភាពក្លាហាន ដើម្បីសារភាពពីអារម្មណ៍របស់ខ្ញុំទៅកាន់អ្នក។ចាប់តាំងពីលើកដំបូងដែលខ្ញុំបានឃើញអ្នកនៅវិទ្យាស្ថាន SETEC មានអ្វីម្យ៉ាងពីអ្នកដែលបានទាក់ទាញចំណាប់អារម្មណ៍របស់ខ្ញុំ។ នៅពេលដែលពួកយើងចាប់ផ្តើមជជែកគ្នា និងបានចំណាយពេលជាមួយគ្នាកាន់តែច្រើន អារម្មណ៍ដែលខ្ញុំមានចំពោះអ្នកក៏ចាប់ផ្តើមកាន់តែខ្លាំងឡើងបន្តិចម្តងៗ។ខ្ញុំពិតជាភ័យ និងរំភើប ព្រោះខ្ញុំមិនដឹងថាអ្នកមានអារម្មណ៍យ៉ាងណាចំពោះខ្ញុំនោះទេ។ ប៉ុន្តែខ្ញុំដឹងថា ខ្ញុំមិនអាចលាក់អារម្មណ៍នេះទៀតបានទេ។ ដូច្នេះ ខ្ញុំបានសម្រេចចិត្តប្រាប់អ្នកពីការពិតថា—ខ្ញុំចូលចិត្តអ្នក ហើយខ្ញុំចង់ឱ្យអ្នកដឹងថា អ្នកបានក្លាយជាមនុស្សពិសេសម្នាក់សម្រាប់ខ្ញុំ។ការសារភាពនៅថ្ងៃនោះ មិនមែនគ្រាន់តែជាការនិយាយថា «ខ្ញុំចូលចិត្តអ្នក» ប៉ុណ្ណោះទេ។ វាគឺជាការដែលខ្ញុំហ៊ានបើកបេះដូងរបស់ខ្ញុំទៅកាន់មនុស្សម្នាក់ ដែលបានក្លាយជាផ្នែកដ៏សំខាន់មួយនៅក្នុងបេះដូងរបស់ខ្ញុំរួចទៅហើយ។',
  '#memories .eyebrow': 'អនុស្សាវរីយ៍ដែលយើងស្រឡាញ់', '#memories h2': 'ជីវិតកាន់តែស្រស់ស្អាត<br><em>ពេលមានអ្នក។</em>',
  '.reasons .eyebrow': 'ហេតុផលតិចតួចក្នុងចំណោមហេតុផលរាប់លាន', '.reasons h2': 'ហេតុផលដែលខ្ញុំស្រឡាញ់អ្នក',
  '.reason:nth-child(1) h3': 'ចិត្តទូលាយ​ នឹងឲ្យតម្លៃ', '.reason:nth-child(1) p': 'អ្នកគឺជាមនុស្សម្នាក់ដែលមានចិត្តល្អ និងចេះយកចិត្តទុកដាក់ខ្លាំងណាស់។ ខ្ញុំស្រឡាញ់ត្រង់ដែលអ្នកតែងតែយកចិត្តទុកដាក់ចំពោះមនុស្សនៅជុំវិញខ្លួន ហើយគិតពីអ្នកដទៃ មិនមែនគិតតែពីខ្លួនឯងនោះទេ។<br> រឿងមួយដែលធ្វើឱ្យខ្ញុំមានអារម្មណ៍ថា អ្នកស្រឡាញ់ និងឱ្យតម្លៃខ្ញុំ គឺនៅពេលដែលអ្នកចង់ធ្វើអ្វីមួយ អ្នកតែងតែសួរខ្ញុំជាមុន ហើយចង់ដឹងពីយោបល់របស់ខ្ញុំ។ ទោះបីជាអ្នកមិនចាំបាច់ត្រូវសុំការអនុញ្ញាតពីខ្ញុំគ្រប់រឿងក៏ដោយ ក៏ការដែលអ្នកសួរយោបល់ខ្ញុំ ធ្វើឱ្យខ្ញុំមានអារម្មណ៍ថា អ្នកគោរព និងឱ្យតម្លៃខ្ញុំ។ <br> រឿងតូចៗទាំងនេះប្រហែលជាមើលទៅសាមញ្ញ ប៉ុន្តែវាគឺជាហេតុផលមួយចំនួនដែលធ្វើឱ្យអ្នកក្លាយជាមនុស្សដ៏ពិសេសសម្រាប់ខ្ញុំ។',
  '.reason:nth-child(2) h3': 'ស្មាមញញឹមរបស់អ្នក', '.reason:nth-child(2) p': 'ស្នាមញញឹមរបស់អ្នក គឺជារឿងមួយដែលខ្ញុំចូលចិត្តបំផុតពីអ្នក។ រាល់ពេលដែលខ្ញុំឃើញអ្នកញញឹម វាក៏ធ្វើឱ្យខ្ញុំសប្បាយចិត្តទៅតាមអ្នកដែរ។ មិនថាថ្ងៃរបស់ខ្ញុំលំបាកប៉ុណ្ណាក៏ដោយ គ្រាន់តែបានឃើញស្នាមញញឹមរបស់អ្នក វាហាក់ដូចជាធ្វើឱ្យអ្វីៗប្រសើរឡើងវិញ។ <br>ខ្ញុំសង្ឃឹមថា អ្នកនឹងរក្សាស្នាមញញឹមដ៏ស្រស់ស្អាតនេះជានិច្ច ព្រោះវាគឺជារឿងមួយដែលធ្វើឱ្យខ្ញុំលង់ស្រឡាញ់អ្នក។',
  '.reason:nth-child(3) h3': 'You feel like home to me', '.reason:nth-child(3) p': 'រាល់ពេលដែលខ្ញុំនៅជាមួយអ្នក ខ្ញុំមានអារម្មណ៍ដូចជាខ្ញុំកំពុងនៅផ្ទះទីពីររបស់ខ្ញុំ។ វាមិនមែនសំដៅទៅលើទីកន្លែងនោះទេ ប៉ុន្តែវាគឺជាអារម្មណ៍ដែលអ្នកផ្តល់ឱ្យខ្ញុំ។ <br> នៅពេលដែលខ្ញុំនៅក្បែរអ្នក ខ្ញុំមានអារម្មណ៍ស្រួលចិត្ត ស្ងប់សុខ និងមានសុវត្ថិភាព។ ខ្ញុំអាចធ្វើជាខ្លួនឯងដោយមិនចាំបាច់ព្យាយាមធ្វើជាមនុស្សផ្សេង។ វត្តមានរបស់អ្នកផ្តល់ឱ្យខ្ញុំនូវភាពកក់ក្តៅមួយដែលពិបាកនឹងពណ៌នា។',
  '#letter .eyebrow': 'សារមួយពីបេះដូងខ្ញុំ', '#letter h2': 'មនុស្សជាទីស្រឡាញ់,',
  '.letter-body p:nth-child(1)': 'Happy 1 Year Anniversary, My Love! មួយឆ្នាំបានកន្លងផុតទៅហើយ ចាប់តាំងពីពួកយើងបានចាប់ផ្តើមដំណើរដ៏ស្រស់ស្អាតមួយនេះជាមួយគ្នា។ នៅពេលដែលខ្ញុំក្រឡេកមើលអ្វីៗដែលពួកយើងបានឆ្លងកាត់ជាមួយគ្នា—ចាប់តាំងពីលើកដំបូងដែលខ្ញុំបានឃើញអ្នក ការជជែកគ្នាលើកដំបូង ពេលវេលាដែលពួកយើងសើចសប្បាយជាមួយគ្នា និងអនុស្សាវរីយ៍ជាច្រើនដែលពួកយើងបានបង្កើតឡើង—ខ្ញុំមានអារម្មណ៍ថា ខ្ញុំពិតជាសំណាងណាស់ដែលមានអ្នកនៅក្នុងជីវិតរបស់ខ្ញុំ។មួយឆ្នាំនេះប្រហែលជាមិនល្អឥតខ្ចោះគ្រប់ពេលនោះទេ។ ពេលខ្លះពួកយើងមានបញ្ហា មានការយល់ច្រឡំ និងមានពេលវេលាពិបាកជាមួយគ្នា។ ប៉ុន្តែទោះបីជាមានរឿងអ្វីកើតឡើងក៏ដោយ អារម្មណ៍ដែលខ្ញុំមានចំពោះអ្នកមិនដែលផ្លាស់ប្តូរឡើយ។ រាល់បញ្ហាដែលពួកយើងបានឆ្លងកាត់ បានធ្វើឱ្យខ្ញុំកាន់តែយល់ពីអ្នក យល់ពីពួកយើង និងដឹងថាទំនាក់ទំនងរបស់ពួកយើងមានតម្លៃសម្រាប់ខ្ញុំប៉ុណ្ណា។ អរគុណដែលតែងតែនៅក្បែរខ្ញុំ អរគុណដែលធ្វើឱ្យខ្ញុំញញឹម អរគុណដែលចំណាយពេលវេលាជាមួយខ្ញុំ និងអរគុណសម្រាប់អនុស្សាវរីយ៍ដ៏ស្រស់ស្អាតជាច្រើនដែលអ្នកបានផ្តល់ឱ្យខ្ញុំ។ អ្នកមិនមែនគ្រាន់តែជាមនុស្សដែលខ្ញុំស្រឡាញ់នោះទេ ប៉ុន្តែអ្នកគឺជាមនុស្សដែលខ្ញុំចង់ឱ្យនៅក្បែរខ្ញុំ ខណៈដែលពួកយើងបន្តរីកចម្រើនទៅមុខជាមួយគ្នា។មួយឆ្នាំនេះគ្រាន់តែជាការចាប់ផ្តើមនៃរឿងរ៉ាវរបស់ពួកយើងប៉ុណ្ណោះ។ ខ្ញុំសង្ឃឹមថា ពួកយើងនឹងបានអបអរខួប ២ ឆ្នាំ ៣ ឆ្នាំ ៥ ឆ្នាំ ១០ ឆ្នាំ និងខួបជាច្រើនឆ្នាំទៀតជាមួយគ្នា។ ខ្ញុំសង្ឃឹមថា នៅថ្ងៃណាមួយ ស្នេហាដែលពួកយើងមាននៅថ្ងៃនេះ នឹងនាំពួកយើងឈានទៅដល់ការរៀបការ បង្កើតគ្រួសាររបស់ពួកយើង និងកសាងជីវិតដ៏ស្រស់ស្អាតមួយជាមួយគ្នា។មិនថាជីវិតនាំពួកយើងទៅទីណា ឬត្រូវឆ្លងកាត់អ្វីខ្លះនោះទេ ខ្ញុំសង្ឃឹមថា ពួកយើងនឹងនៅតែជ្រើសរើសគ្នា គាំទ្រគ្នា អភ័យទោសឱ្យគ្នា និងកាន់ដៃគ្នាឆ្លងកាត់ទាំងថ្ងៃដែលមានក្តីសុខ និងថ្ងៃដែលពិបាក។ Tank you beb for 1 Year',
  '.signature': 'ជារបស់អ្នកជារៀងរហូត,', 'footer > p': 'ក្តីស្រឡាញ់ទាំងអស់របស់ខ្ញុំ សម្រាប់តែអ្នកម្នាក់គត់។'
};




// Personal translations based on the current story written in the page.
Object.assign(khmerTranslations, {
  '#letter .eyebrow': 'សារមួយចេញពីបេះដូងរបស់ខ្ញុំ',
  '.moment:nth-child(1) .moment-date': 'ថ្ងៃទី ១៧ ខែមករា ឆ្នាំ ២០២៤',
  '.moment:nth-child(1) h3': 'ថ្ងៃដែលយើងបានជួបគ្នា',
  '.moment:nth-child(1) > p:last-child': 'យើងបានជួបគ្នានៅវិទ្យាស្ថាន ស៊ីតិច។ តាំងពីលើកដំបូងដែលខ្ញុំបានឃើញអ្នក ខ្ញុំមានអារម្មណ៍ថាជីវិតរបស់ខ្ញុំជិតនឹងផ្លាស់ប្តូរ។ ក្នុងកែវភ្នែករបស់ខ្ញុំ អ្នកពិតជាស្រស់ស្អាតខ្លាំងណាស់ ហើយមានអ្វីម្យ៉ាងអំពីអ្នកដែលខ្ញុំមិនអាចបំភ្លេចបាន។ អារម្មណ៍ដំបូងនោះពិតជាពិសេសណាស់សម្រាប់ខ្ញុំ ហើយគ្មាននរណាម្នាក់អាចជំនួសវាបានឡើយ។ សូម្បីតែពេលនេះ ខ្ញុំនៅតែចងចាំអារម្មណ៍ដែលខ្ញុំមាននៅពេលបានឃើញអ្នកជាលើកដំបូង។',
  '.moment:nth-child(2) .moment-date': 'ថ្ងៃទី ១៩ ខែកក្កដា ឆ្នាំ ២០២៥',
  '.moment:nth-child(2) h3': 'លង់ស្រឡាញ់អ្នក',
  '.moment:nth-child(2) > p:last-child': 'នៅថ្ងៃនេះ ពួកយើងមានកិច្ចការមួយសម្រាប់មុខវិជ្ជា SP។ ពួកយើងបានធ្វើដំណើរទៅឧដុង្គជាមួយគ្នា ដើម្បីថតវីដេអូចម្រៀងសម្រាប់បទ «រៀនចប់»។ វាបានក្លាយជាអនុស្សាវរីយ៍ដ៏ពិសេសមួយដែលខ្ញុំនៅតែចងចាំ។ អ្នកមើលទៅស្រស់ស្អាតខ្លាំងណាស់ក្នុងឯកសណ្ឋានសាលារបស់អ្នក។ ការបានឃើញអ្នកបែបនោះពិតជាពិសេស ហើយក្នុងកែវភ្នែកខ្ញុំ អ្នកគឺជានារីដែលស្រស់ស្អាតបំផុតបន្ទាប់ពីម្ដាយរបស់ខ្ញុំ។',
  '.moment:nth-child(3) .moment-date': 'ថ្ងៃទី ៣០ ខែមេសា ឆ្នាំ ២០២៥',
  '.moment:nth-child(3) h3': 'ការជជែកគ្នាលើកដំបូង',
  '.moment:nth-child(3) > p:last-child': 'លើកដំបូងដែលពួកយើងបានជជែកគ្នា អ្វីៗហាក់ដូចជាធម្មជាតិ និងសប្បាយរីករាយខ្លាំងណាស់។ បន្ទាប់ពីការសន្ទនារបស់យើង ខ្ញុំញញឹមមិនឈប់សោះ។ អ្វីៗបានចាប់ផ្តើមនៅពេលដែលខ្ញុំបានឆ្លើយតបទៅ Story របស់អ្នកថា «Jom, sahav mles!» ហើយអ្នកបានឆ្លើយមកខ្ញុំវិញត្រឹមតែមួយម៉ាត់ថា «ស្តាវ»។',
  '.moment:nth-child(4) .moment-date': 'ថ្ងៃទី ១១ ខែសីហា ឆ្នាំ ២០២៥',
  '.moment:nth-child(4) h3': 'ថ្ងៃដែលខ្ញុំសារភាពស្នេហ៍',
  '.moment:nth-child(4) > p:last-child': 'ខ្ញុំនៅតែចងចាំថ្ងៃដែលខ្ញុំបានប្រមូលភាពក្លាហាន ដើម្បីសារភាពពីអារម្មណ៍របស់ខ្ញុំទៅកាន់អ្នក។ តាំងពីលើកដំបូងដែលខ្ញុំបានឃើញអ្នកនៅវិទ្យាស្ថាន ស៊ីតិច មានអ្វីម្យ៉ាងអំពីអ្នកដែលបានទាក់ទាញចំណាប់អារម្មណ៍របស់ខ្ញុំ។ នៅពេលដែលពួកយើងចាប់ផ្តើមជជែក និងចំណាយពេលជាមួយគ្នាកាន់តែច្រើន អារម្មណ៍របស់ខ្ញុំចំពោះអ្នកក៏កាន់តែខ្លាំងឡើង។ ខ្ញុំភ័យ ព្រោះខ្ញុំមិនដឹងថាអ្នកមានអារម្មណ៍យ៉ាងណាចំពោះខ្ញុំ ប៉ុន្តែខ្ញុំដឹងថាខ្ញុំមិនអាចលាក់អារម្មណ៍នេះតទៅទៀតបានទេ។ ដូច្នេះ ខ្ញុំបានសម្រេចចិត្តប្រាប់អ្នកតាមត្រង់ថា ខ្ញុំចូលចិត្តអ្នក ហើយចង់ឱ្យអ្នកដឹងថា អ្នកបានក្លាយជាមនុស្សពិសេសយ៉ាងណាសម្រាប់ខ្ញុំ។ ការសារភាពនោះមិនមែនគ្រាន់តែជាការនិយាយថា «ខ្ញុំចូលចិត្តអ្នក» ប៉ុណ្ណោះទេ តែជាការដែលខ្ញុំហ៊ានផ្តល់ឱកាសដល់មនុស្សម្នាក់ ដែលបានក្លាយជាផ្នែកដ៏សំខាន់នៃបេះដូងខ្ញុំរួចទៅហើយ។',
  '.moment:nth-child(5) .moment-date': 'ថ្ងៃនេះ និងរាល់ថ្ងៃ',
  '.moment:nth-child(5) h3': 'នៅតែលង់ស្រឡាញ់',
  '.moment:nth-child(5) > p:last-child': 'ថ្ងៃនេះ ថ្ងៃស្អែក និងរាល់ថ្ងៃ ខ្ញុំនឹងបន្តស្រឡាញ់អ្នកគ្រប់ពេលវេលា និងគ្រប់ទីកន្លែង។ ទោះបីពេលខ្លះយើងមានបញ្ហា ការយល់ច្រឡំ ឬពេលវេលាដ៏លំបាកក៏ដោយ អារម្មណ៍របស់ខ្ញុំចំពោះអ្នកនៅតែដដែល។ ទំនាក់ទំនងមួយប្រហែលជាមិនអាចល្អឥតខ្ចោះគ្រប់ពេលទេ ប៉ុន្តែខ្ញុំនៅតែជ្រើសរើសអ្នក។ មិនថាយើងត្រូវឆ្លងកាត់អ្វីក៏ដោយ ខ្ញុំសង្ឃឹមថាយើងអាចយល់ចិត្ត អភ័យទោស និងរីកចម្រើនជាមួយគ្នា។ ទាំងក្នុងថ្ងៃល្អ និងថ្ងៃដ៏លំបាក ខ្ញុំចង់ឱ្យអ្នកដឹងថា អ្នកនៅតែជាមនុស្សដែលខ្ញុំស្រឡាញ់។ ខ្ញុំសង្ឃឹមថាយើងអាចនៅជាមួយគ្នាបានយូរអង្វែង ទោះមានឧបសគ្គអ្វីចូលមកក្នុងជីវិតក៏ដោយ។ ខ្ញុំចង់ឱ្យយើងបន្តជ្រើសរើស គាំទ្រ និងរីកចម្រើនជាមួយគ្នា ក្នុងគ្រប់ជំពូកនៃដំណើររបស់យើង។ ហើយនៅថ្ងៃណាមួយ ខ្ញុំសង្ឃឹមថាសេចក្តីស្រឡាញ់របស់យើងនឹងនាំយើងទៅដល់អាពាហ៍ពិពាហ៍។ ខ្ញុំចង់កសាងអនាគតជាមួយអ្នក បង្កើតគ្រួសារជាមួយគ្នា និងចាស់ទៅក្បែរអ្នក។ តាំងពីថ្ងៃដំបូងដែលខ្ញុំលង់ស្រឡាញ់អ្នក រហូតដល់អនាគតដែលយើងមិនទាន់បានទៅដល់ ខ្ញុំសង្ឃឹមថានឹងតែងតែមានអ្នក និងខ្ញុំ។',
  '.gallery .tilt-left figcaption': 'កន្លែងដែលយើងមានក្តីសុខ',
  '.gallery .featured figcaption': 'ថ្ងៃដ៏ល្អបំផុត ♡',
  '.gallery .tilt-right figcaption': 'ពេលដែលយើងសើចជាមួយគ្នា',
  '.gallery-note': 'ជំនួសរូបគំរូទាំងនេះដោយរូបថតរបស់អ្នក ដើម្បីធ្វើឱ្យទំព័រនេះក្លាយជារបស់អ្នកពិតៗ។'
});

const originalEnglish = {};
Object.keys(khmerTranslations).forEach((selector) => {
  const element = document.querySelector(selector);
  if (element) originalEnglish[selector] = element.innerHTML;
});

function setLanguage(language) {
  const selected = language === 'km' ? 'km' : 'en';
  document.documentElement.lang = selected;
  Object.keys(khmerTranslations).forEach((selector) => {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = selected === 'km' ? khmerTranslations[selector] : originalEnglish[selector];
  });
  document.querySelectorAll('.lang-button').forEach((button) => {
    const active = button.dataset.lang === selected;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  try {
    localStorage.setItem('anniversary-language', selected);
  } catch {
    // Some browsers disable storage when a page is opened directly from a file.
  }
}

document.querySelectorAll('.lang-button').forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
let savedLanguage = 'en';
try {
  savedLanguage = localStorage.getItem('anniversary-language') || 'en';
} catch {
  savedLanguage = 'en';
}
setLanguage(savedLanguage);

function updateCountdown() {
  let difference = anniversaryDate.getTime() - Date.now();
  if (difference < 0) difference = 0;

  const days = Math.floor(difference / 86400000);
  const hours = Math.floor((difference % 86400000) / 3600000);
  const minutes = Math.floor((difference % 3600000) / 60000);
  const seconds = Math.floor((difference % 60000) / 1000);

  fields.days.textContent = String(days).padStart(3, '0');
  fields.hours.textContent = String(hours).padStart(2, '0');
  fields.minutes.textContent = String(minutes).padStart(2, '0');
  fields.seconds.textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const soundButton = document.querySelector('.sound-button');
const audio = document.querySelector('#our-song');
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#main-menu');

async function startOurSong() {
  try {
    await audio.play();
    soundButton.classList.add('playing');
    soundButton.setAttribute('aria-label', 'Pause our song');
    return true;
  } catch {
    return false;
  }
}

const ourSongUrl = 'https://youtu.be/KW-vH_qfL-k?si=6xGOaZKQPbqSGMzQ';

function closeMenu() {
  menu.classList.remove('open');
  menuButton.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open menu');
}

menuButton.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menuButton.classList.toggle('open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

let youtubePlayer = null;
let songUnlocked = false;

function startYoutubeSong() {
  if (youtubePlayer) youtubePlayer.remove();
  youtubePlayer = document.createElement('iframe');
  youtubePlayer.src = 'https://www.youtube.com/embed/KW-vH_qfL-k?autoplay=1&loop=1&playlist=KW-vH_qfL-k';
  youtubePlayer.title = 'Our song — YouTube player';
  youtubePlayer.allow = 'autoplay; encrypted-media';
  youtubePlayer.setAttribute('allowfullscreen', '');
  youtubePlayer.className = 'youtube-audio-player';
  document.body.appendChild(youtubePlayer);
  soundButton.classList.add('playing');
  soundButton.setAttribute('aria-label', 'Stop our song');
  soundButton.querySelector('.sound-label').textContent = 'Playing';
}

// Autoplay immediately where the browser permits audible media.
startYoutubeSong();

document.addEventListener('pointerdown', (event) => {
  if (songUnlocked || (event.target instanceof Element && event.target.closest('.sound-button'))) return;
  songUnlocked = true;
  startYoutubeSong();
}, { once: true });

soundButton.addEventListener('click', () => {
  if (!songUnlocked) {
    songUnlocked = true;
    startYoutubeSong();
    return;
  }

  if (youtubePlayer) {
    youtubePlayer.remove();
    youtubePlayer = null;
    soundButton.classList.remove('playing');
    soundButton.setAttribute('aria-label', 'Play our song');
    soundButton.querySelector('.sound-label').textContent = 'Our song';
    return;
  }

  startYoutubeSong();
});

const albumImages = [
  ...Array.from({ length: 13 }, (_, index) => `${index + 1}.jpg`),
  'car.jpg',
  'long.jpg',
  'yana.jpg'
];
const albumModal = document.querySelector('#album-modal');
const photoViewer = document.querySelector('.photo-viewer');
const viewerImage = photoViewer.querySelector('figure img');
const viewerCount = photoViewer.querySelector('figcaption span');
const albumGrid = document.querySelector('.album-grid');
albumGrid.innerHTML = albumImages.map((source, index) => `<button type="button" data-index="${index}"><img src="${source}" alt="Our memory ${index + 1}" loading="lazy"></button>`).join('');
document.querySelector('.view-album-button b').textContent = albumImages.length;
document.querySelector('.album-total').textContent = albumImages.length;
let activePhoto = 0;

function openAlbum() { albumModal.classList.add('open'); albumModal.setAttribute('aria-hidden','false'); document.body.classList.add('album-open'); document.querySelector('.album-close').focus(); }
function closeAlbum() { albumModal.classList.remove('open'); photoViewer.classList.remove('open'); albumModal.setAttribute('aria-hidden','true'); photoViewer.setAttribute('aria-hidden','true'); document.body.classList.remove('album-open'); }
function showPhoto(index) { activePhoto = (index + albumImages.length) % albumImages.length; viewerImage.src = albumImages[activePhoto]; viewerImage.alt = `Album memory ${activePhoto + 1}`; viewerCount.textContent = String(activePhoto + 1).padStart(2,'0'); photoViewer.classList.add('open'); photoViewer.setAttribute('aria-hidden','false'); }

document.querySelector('.view-album-button').addEventListener('click', openAlbum);
document.querySelector('.album-close').addEventListener('click', closeAlbum);
document.querySelector('.viewer-back').addEventListener('click', () => { photoViewer.classList.remove('open'); photoViewer.setAttribute('aria-hidden','true'); });
document.querySelector('.viewer-prev').addEventListener('click', () => showPhoto(activePhoto - 1));
document.querySelector('.viewer-next').addEventListener('click', () => showPhoto(activePhoto + 1));
document.querySelectorAll('.album-grid button').forEach((button) => button.addEventListener('click', () => showPhoto(Number(button.dataset.index))));
document.addEventListener('keydown', (event) => { if (!albumModal.classList.contains('open')) return; if (event.key === 'Escape') photoViewer.classList.contains('open') ? document.querySelector('.viewer-back').click() : closeAlbum(); if (photoViewer.classList.contains('open') && event.key === 'ArrowLeft') showPhoto(activePhoto - 1); if (photoViewer.classList.contains('open') && event.key === 'ArrowRight') showPhoto(activePhoto + 1); });
