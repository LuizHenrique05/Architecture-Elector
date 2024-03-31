'use client'

import { useState, ChangeEvent, useEffect } from 'react'

import styles from './SpecsForm.module.css'

export default function SpecsForm() {
  const [complexity, setComplexity] = useState<string>('')
  const [deadline, setDeadline] = useState<string>('')
  const [scalability, setScalability] = useState<string>('')
  const [resilience, setResilience] = useState<boolean>(false)
  const [total_uptime, setTotal_uptime] = useState<boolean>(false)
  const [devops, setDevops] = useState<string>('')
  const [tecnicalUsers, setTecnicalUsers] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleComplexityInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      let complexity_value = event.target.value.trim().replace(/[^\d.]/g, '')
      complexity_value = complexity_value.replace(/^(\d{0,2}(?:\.\d{0,2})?).*$/, '$1')
      complexity_value = parseFloat(complexity_value) > 10 ? '10' : complexity_value
      complexity_value = parseFloat(complexity_value) < 0 ? '0' : complexity_value
      setComplexity(complexity_value)
  }

  const handleDeadlineInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    let deadline_value = event.target.value.trim().replace(/[^1-9]\d{0,2}/, '')
    deadline_value = parseInt(deadline_value) > 999 ? '999' : deadline_value
    setDeadline(deadline_value)
  }

  const validateForm = (event: any) => {
    if (!isAllInputsFilled()) {
      event.preventDefault()
      setTimeout (() => {
        setErrorMessage('')
      }, 3000)
      return false
    }
    
    return true
  }

  const isAllInputsFilled = () => {
    if (complexity === '' || deadline === '' || scalability === '' || devops === '' || tecnicalUsers === '') {
      console.log(complexity, deadline, scalability, devops, tecnicalUsers)
      setErrorMessage('Please fill out all required fields.')
      return false
    }

    return true
  }

  useEffect(() => {
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
      select.value = ''
    })
  }, [])

  return (
    <>
      <form className={styles.form}>
        <label htmlFor="complexity">
          1. On a scale of 0 to 10, how would you describe the complexity of your project?* (Comma not allowed).
        </label>
        <input 
          type="text"
          value={complexity}
          name="complexity"
          id="complexity"
          placeholder="Type a number. Ex: 4.5"
          onChange={handleComplexityInputChange}
          required />

        <label htmlFor="deadline">
          2. What is the deadline for your project in weeks?* (Min. 1 Week).
        </label>
        <input 
          type="text"
          value={deadline}
          name="deadline"
          id="deadline"
          placeholder="Type a number. Ex: 24"
          onChange={handleDeadlineInputChange}
          required />

        <label htmlFor="scalability">
          3. What degree of scalability will your project have?* (Low, Medium, High).
        </label>
        <select 
          name="scalability" 
          id="scalability"
          value={scalability}
          onChange={(e) => setScalability(e.target.value)}
          required >
            <option value="" disabled selected>Select</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>

        <label htmlFor="resilience_or_total_uptime">
          4. Does your project require resilience or total uptime? (Don't mark if your project doesn't need any).
        </label>
        <div className={styles.all__checkbox}>  
          <div>
            <input type="checkbox" id="resilience" name="resilience_or_total_uptime" value="resilience" checked={resilience} onChange={(e) => setResilience(e.target.checked)} />
            <label htmlFor="resilience">Resilience.</label>
          </div>

          <div>
            <input type="checkbox" id="total_uptime" name="resilience_or_total_uptime" value="total_uptime" checked={total_uptime} onChange={(e) => setTotal_uptime(e.target.checked)} />
            <label htmlFor="total_uptime">Total Uptime.</label>
          </div>
        </div>

        <label htmlFor="devops">
          5. How familiar is the team with DevOps?*
        </label>
        <select 
          name="devops" 
          id="devops"
          value={devops}
          onChange={(e) => setDevops(e.target.value)}
          required >
            <option value="" disabled selected>Select</option>
            <option value="unfamiliar">Completely unfamiliar, we have no experience with DevOps practices.</option>
            <option value="somewhat">Somewhat familiar, we have some exposure to DevOps but still have room for improvement.</option>
            <option value="familiar">Very familiar, we have extensive experience implementing DevOps practices.</option>
        </select>

        <label htmlFor="tecnical_users">
          6. Are the system users expected to be technically proficient?* (Yes, No).
        </label>
        <select 
          name="tecnical_users" 
          id="tecnical_users"
          value={tecnicalUsers}
          onChange={(e) => setTecnicalUsers(e.target.value)}
          required >
            <option value="" disabled selected>Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
        </select>

        <button className={styles.submit__button} type="button" onClick={validateForm}>Check Results</button>

        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      </form>
    </>
  )
}