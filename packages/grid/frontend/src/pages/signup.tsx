import {Button, Text} from '@/omui'
import {FormControl} from '@/omui/components/FormControl/FormControl'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useForm} from 'react-hook-form'

export default function signup() {
    const router = useRouter()
  
    const {
      handleSubmit,
      register,
      setError,
      formState: {isValid, isDirty, errors}
    } = useForm<{email: string; password: string}>({mode: 'onChange'})
  
    const handleLogin = async ({email, password}) => {
      try {
        // await login({email, password})
        router.push('/users')
      } catch (err) {
        setError('email', {type: 'manual', message: 'Invalid credentials'}, {shouldFocus: true})
      }
    }

    return (
        <article
      className="grid px-7 grid-cols-12 grid-rows-3 min-h-screen w-full"
      style={{
        gridTemplateAreas: `
          "header"
          "content"
          "footer"
        `,
        gridTemplateRows: 'minmax(min-content, 200px) auto 80px'
      }}>
      <div className="col-span-full self-end justify-self-center">
        <img src="/assets/small-grid-symbol-logo.png" width={80} height={80} />
      </div>
      <div className="col-span-4 col-start-5 mt-8">
        <section className="flex flex-col items-center space-y-4">
          <Text size="2xl"></Text>
          <Text className="text-gray-600">
            'running-version'
          </Text>
        </section>
        <section className="mt-10 space-y-4">
          <fieldset className="w-full">
            <form onSubmit={handleSubmit(handleLogin)}>
              <FormControl
                id="email"
                label='email'
                error={Boolean(errors.email)}
                hint={errors.email?.message}
                required>
                <input placeholder="abc@university.edu" {...register('email', {required: true})} />
              </FormControl>
              <FormControl className="mt-4" id="password" label='password' error={Boolean(errors.email)} required>
                <input type="password" placeholder="···········" {...register('password', {required: true})} />
              </FormControl>
              <Button size="sm" className="mt-6 w-full justify-center" disabled={!isValid || !isDirty}>
                'buttons.login'
              </Button>
            </form>
          </fieldset>
        </section>
        <section className="block space-y-6 text-center mt-6">
          <div>
            <Text size="sm">'no-account'</Text>
            <Link href="/signup">
              <a className="text-link">
                <Text size="sm" underline>
                  'apply-account'
                </Text>
              </a>
            </Link>
          </div>
        </section>
      </div>
    </article>
    )
}
