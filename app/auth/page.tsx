export default function AuthPage() {
  return (
    <section className="flex min-h-[calc(100vh-160px)] items-center justify-center bg-[#f5f5f7] px-3 py-6 sm:px-4 sm:py-10">
      <div className="w-full max-w-[440px] overflow-hidden rounded-[18px] bg-white shadow-[0_18px_45px_rgba(35,33,81,0.12)] sm:rounded-[24px]">
        <div className="px-4 pt-7 pb-8 sm:px-7 sm:pt-9 sm:pb-9">
          <div className="mb-8 sm:mb-10" />

          <form className="space-y-6">
            <div className="h-[60px] w-full rounded-[10px] border border-[#d9d9e3]">
              <input
                type="tel"
                placeholder="Телефон *"
                className="h-full w-full rounded-[10px] px-6 text-[18px] text-[#5b5d78] outline-none placeholder:text-[#5b5d78]"
              />
            </div>

            <div className="h-[60px] w-full rounded-[10px] border border-[#d9d9e3]">
              <input
                type="password"
                placeholder="Пароль *"
                className="h-full w-full rounded-[10px] px-6 text-[18px] text-[#5b5d78] outline-none placeholder:text-[#5b5d78]"
              />
            </div>

            <div className="flex items-start justify-between gap-4 text-[15px] text-[#2b2d42] sm:items-center sm:text-[16px]">
              <label className="flex max-w-[148px] cursor-pointer items-start gap-3 sm:max-w-none sm:items-center">
                <input
                  type="checkbox"
                  className="mt-0.5 h-[21px] w-[21px] shrink-0 cursor-pointer rounded-[7px] border border-[#DEDEE2] accent-[#6c56d8] sm:mt-0"
                />
                <span className="leading-[1.15] sm:leading-none">Запомнить меня</span>
              </label>

              <a
                href="#"
                className="max-w-[132px] text-right leading-[1.35] text-[#6c56d8] transition hover:opacity-80 sm:max-w-none sm:leading-normal"
              >
                Я забыл свой пароль
              </a>
            </div>

            <button
              type="submit"
              className="h-[60px] w-full cursor-pointer rounded-[10px] bg-[#6c56d8] text-[20px] font-semibold text-white transition hover:bg-[#624dcd]"
            >
              Войти
            </button>
          </form>
        </div>

        <div className="border-t border-[#e7e7ee] px-4 py-6 text-center text-[16px] text-[#2f3144] sm:px-7 sm:py-7 sm:text-[18px]">
          <span>Нет аккаунта? </span>
          <a href="#" className="font-medium text-[#6c56d8] transition hover:opacity-80">
            Зарегистрироваться
          </a>
        </div>
      </div>
    </section>
  );
}