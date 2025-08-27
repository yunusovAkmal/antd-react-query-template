export enum AdminRoleEnum {
  SERVICE = 'service', // Servis admini
  TM = 'tm', // Ta'lim muassasa admini
  REGION = 'region', // Hudud admini
  MINISTRY = 'ministry' // Vazirlik admini
}

export enum AdminRolePartEnum {
  FULL = 'full', // To'liq
  DIPLOMA = 'diploma', // Diploma tekshiruvchi
  CERTIFICATE = 'certificate' // Sertifikat tekshiruvchi
}

export enum ServiceSlugEnum {
  ADMISSION_LYCEUM = 'admission_lyceum', // Litsey qabuli
  ADMISSION_VOCATIONAL_SCHOOL = 'admission_vocational_school', // Kasb hunar maktabi qabuli
  ADMISSION_INTERVIEW = 'admission_interview', // OTMlarga suhbat asosida o'qishga qabuli
  ADMISSION_COLLEGE = 'admission_college', // Kollej qabuli
  ADMISSION_TECHNICAL_SCHOOL = 'admission_technical_school', // Texnikum qabuli
  ADMISSION_TECHNICAL_COLLEGE = 'admission_technical_college', // Texnik kollej qabuli
  ADMISSION_SECONDARY = 'admission_secondary', // Ikkinchi ta'lim qabuli
  ADMISSION_MASTER = 'admission_master', // Magistratura qabuli
  ADMISSION_TRANSFER = 'admission_transfer', // O'qishni ko'chirish qabuli
  ADMISSION_SCHOLARSHIP = 'admission_scholarship', // Davlat stipendiyalari qabuli
  HIGHER_STUDY_CERTIFICATE = 'higher_study_certificate', // O‘qiyotganlik haqida ma’lumotnoma olish (Oliy ta'lim)
  HIGHER_EDUCATION_SHEET = 'higher_education_sheet', // O‘quv varaqasini olish (Oliy ta'lim)
  HIGHER_QR_DIPLOMA = 'higher_qr_diploma', // QR diplom olish (Oliy ta'lim)
  HIGHER_RATING_BOOK = 'higher_rating_book', // Talaba reyting daftarchasini olish (Oliy ta'lim)
  PROF_STUDY_CERTIFICATE = 'prof_study_certificate', // O‘qiyotganlik haqida ma’lumotnoma olish (Prof)
  ACADEMIC_DEGREE_CERTIFICATE = 'academic_degree_certificate', // Ilmiy daraja haqida ma'lumotnoma olish
  HIGHER_DIPLOMA_ADDING_OR_EDITING = 'higher_diploma_adding_or_editing', // Oliy ta'lim olganlik haqidagi diplom ma'lumotlarini qo‘shish yoki tahrirlash uchun ariza yuborish (Oliy ta'lim)
  PROF_DIPLOMA_ADDING_OR_EDITING = 'prof_diploma_adding_or_editing', // O‘rta maxsus va professional ta'lim muassasalarini tugatganligi to‘g‘risidagi diplom ma'lumotlarini qo‘shish yoki tahrirlash (Prof)
  CONFIRM_CEFR = 'confirm_cefr', // Chet tili sertifikatini tasdiqlash
  DORMITORY = 'dormitory', // Talabalar turar joyiga joylashish uchun ariza yuborish (1-kurs talabalari uchun)
  RE_READING_APPLICATION = 're_reading_application' // Qayta o‘qishga ariza
}

export enum ServiceDegreeEnum {
  OTHER = 0, // Boshqa
  SCHOOL = 1, // Maktab (1-darajali)
  LYCEUM = 2, // Litsey (2-darajali)
  VOCATIONAL_SCHOOL = 3, // Kasb-hunar maktabi (3-darajali)
  COLLEGE = 4, // Kollej (4-darajali)
  TECHNICAL_SCHOOL = 5, // Texnikum (5-darajali)
  BACHELOR = 6, // Bakalavr (6-darajali)
  MASTER = 7 // Magistr (7-darajali)
}

export enum ServiceStatusEnum {
  NEW = 1, // Yangi (poka e'lon qilinmagan)
  OPEN = 2, // Ochiq
  CLOSED = 3 // Yopilgan
}

export enum ServiceCategoryEnum {
  ADMISSION = 0, // Qabul
  PDF_INFO = 1, // PDF shaklida ma'lumot olish
  APPLY = 2 // Ariza yuborish
}

export enum TmOrganizationalTypeEnum {
  LYCEUM = 'lyceum', // Litsey
  VOCATIONAL_SCHOOL = 'vocational_school', // Kasb-hunar maktabi
  COLLEGE = 'college', // Kollej
  TECHNICAL_COLLEGE = 'technical_college', // Texnikum
  UNIVERSITY = 'university', // Universitet
  INSTITUTE = 'institute', // Institut
  ACADEMY = 'academy', // Akademiya
  BRANCH = 'filial', // Filial
  CONSERVATORY = 'conservatory' // Konservatoriya
}

export enum TmOwnershipFormEnum {
  STATE = 11, // Davlat
  PRIVATE = 12, // Nodavlat
  FOREIGN = 13, // Xorijiy
  JOINT = 14 // Qo'shma
}

export enum LyceumApplicationStatusEnum {
  NEW = 1, // Yangi
  REJECTED = 2, // Rad qilingan
  ACCEPTED = 3, // Qabul qilingan
  DTM_EXAM_DATE_SET = 4, // DTM imtihon kuni aniqlangan
  DTM_RESULTS_PUBLISHED = 5 // DTM test natijalari e'lon qilingan
}

export enum LyceumSelectionStatusEnum {
  NEW = 1, // Yangi
  REJECTED_BY_PHOTO = 2, // Rasm sababli rad qilindi
  REJECTED_BY_FOREIGN_LANGUAGE_CERTIFICATE = 3, // Xorijiy til sertifikati sababli rad qilindi
  REJECTED_BY_SCIENCE_SUBJECT_CERTIFICATE = 4, // Ilmiy fan sertifikati sababli rad qilindi
  REJECTED_BY_ACHIEVEMENT_CERTIFICATE = 5, // Yutuq sertifikati sababli rad qilindi
  ACCEPTED = 6 // Qabul qilindi
}

export enum ClassifierEnum {
  TM = 'tm',
  CEFR = 'cefr',
  CEFR_TYPE = 'cefr-type',
  ACHIEVEMENT_TYPE = 'achievement-type',
  DISTRICT = 'disctrit',
  MINISTRY = 'ministry',
  CITIZENSHIP = 'citizenship',
  DISABILITY_TYPE = 'disability-type',
  EDUCATION_FORM = 'education-form',
  EDUCATION_LANGUAGE = 'education-language',
  FOREIGN_LANGUAGE = 'foreign-language',
  NATIONALITY = 'nationality',
  SPECIALTY = 'speciality',
  REGION = 'region',
  CHECKED_TM = 'checked-tm'
}

export enum DiplomaTypeEnum {
  SCHOOL = 'school', // Maktab shahodatnoma
  PROF = 'prof', // Prof diplom
  BACHELOR = 'bachelor', // Bakalavr diplom
  LYCEUM = 'lyceum' // Litsey diplom
}

export enum CertificateTypeEnum {
  CEFR = 'cefr', // CEFR
  NATIONAL = 'national', // Milliy sertifikat
  ACHIEVEMENT = 'achievement', // Yutuq
  DISABILITY = 'disability' // Nogironlik
}

export enum GenderEnum {
  MALE = 1,
  FEMALE = 2
}

export enum VocationalApplicationStatusEnum {
  NEW = 1, // Yangi
  ACCEPTED = 2, // Qabul qilingan
  REJECTED = 3 // Rad qilingan
}

export enum MasterApplicationStatusEnum {
  NEW = 1, // Yangi
  DATA_CHECKED = 2, // Ariza ma'lumotlari tekshirildi
  DATA_REJECTED = 3, // Ariza ma'lumotlari rad qilindi
  DIPLOMA_APPROVED = 4, // Diplom tasdiqlandi
  DIPLOMA_REJECTED = 5, // Diplom rad qilindi
  APPLICATION_ACCEPTED = 6, // Ariza qabul qilindi
  APPLICATION_REJECTED = 7 // Ariza rad qilindi
}

export enum MasterResultStatusEnum {
  NOT_PUBLISHED = 1, // Natijalar e'lon qilinmagan
  NOT_RECOMMENDED = 2, // Tavsiya qilinmagan
  GRANT = 3, // Grant
  CONTRACT = 4, // Kontrakt
  PREFERENTIAL_GRANT = 5, // Imtiyozli grant
  PREFERENTIAL_CONTRACT = 6 // Imtiyozli kontrakt
}

export enum EducationFormIdEnum {
  FULL_TIME_EDUCATION = 1,
  EVENING_CLASSES = 2,
  PART_TIME_EDUCATION = 3,
  SPECIAL_EDUCATION = 4,
  SECOND_HIGHER_EDUCATION_PART_TIME = 5,
  DISTANCE_EDUCATION = 6,
  JOINT_EDUCATION_PART_TIME = 7,
  SECOND_HIGHER_EDUCATION_FULL_TIME = 8,
  SECOND_HIGHER_EDUCATION_EVENING_CLASSES = 9,
  JOINT_EDUCATION_FULL_TIME = 10,
  JOINT_EDUCATION_EVENING_CLASSES = 11,
  DUAL = 12
}

export enum InterviewGroupStatusEnum {
  NEW = 1, // Yangi
  INTERVIEW_TIME_SET = 2, // Suhbat vaqtini belgilangan
  RESULT_PUBLISHED = 3 // Natijalar e'lon qilingan
}

export enum DiplomaStatusEnum {
  NEW = 1, // Yangi
  APPROVED = 2, // Tasdiqlandi
  REJECTED = 3 // Rad qilingan
}

export enum SecondaryApplicationStatusEnum {
  NEW = 1, // Yangi
  DIPLOMA_APPROVED = 2, // Diplom tasdiqlandi
  DIPLOMA_REJECTED = 3, // Diplom rad qilindi
  APPLICATION_ACCEPTED = 4, // Ariza qabul qilindi
  APPLICATION_REJECTED = 5 // Ariza rad qilindi
}

export enum InterviewAppealStatusEnum {
  NEW = 1, // Yangi
  ACCEPTED = 2, // Qabul qilingan
  REJECTED = 3, // Rad qilingan
  GRADED = 4 // Appellatsiya natijasi qo'yilgan
}

export enum TechnicalApplicationStatusEnum {
  NEW = 1, // Yangi
  ACCEPTED = 2, // Qabul qilingan
  REJECTED = 3 // Rad qilingan
}

export enum TechnicalGroupStatusEnum {
  NEW = 1, // Guruh yaratilgan
  ADDRESS_SENT = 2, // Manzillar jo'natilgan
  RESULT_PUBLISHED = 3 // Natija e'lon qilingan
}

export enum InterviewNotParticipatedStatusEnum {
  NEW = 1, // Yangi
  ACCEPTED = 2, // Qabul qilingan
  REJECTED = 3, // Rad qilingan
  GRADED = 4 // Qayta imtihon natijasi qo'yilgan
}
